// ===== State =====
let items = [];

// ===== DOM Elements =====
const inputScreen = document.getElementById("input-screen");
const resultScreen = document.getElementById("result-screen");
const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const itemList = document.getElementById("item-list");
const emptyState = document.getElementById("empty-state");
const listTitle = document.getElementById("list-title");
const compareBtn = document.getElementById("compare-btn");
const backBtn = document.getElementById("back-btn");
const loadingEl = document.getElementById("loading");
const errorView = document.getElementById("error-view");
const errorMsg = document.getElementById("error-msg");
const retryBtn = document.getElementById("retry-btn");
const resultsContent = document.getElementById("results-content");
const summaryCard = document.getElementById("summary-card");
const itemsDetail = document.getElementById("items-detail");

// ===== Input Screen Logic =====

function updateUI() {
  listTitle.textContent = `Danh sach (${items.length} san pham)`;
  compareBtn.textContent = `So Sanh Gia (${items.length} san pham)`;
  compareBtn.disabled = items.length === 0;

  if (items.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}

function renderItems() {
  // Remove all item rows but keep empty state
  const rows = itemList.querySelectorAll(".item-row");
  rows.forEach((r) => r.remove());

  items.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "item-row";
    row.innerHTML = `
      <span class="item-number">${index + 1}</span>
      <span class="item-name">${escapeHtml(item)}</span>
      <button class="btn-remove" data-index="${index}">X</button>
    `;
    itemList.appendChild(row);
  });

  updateUI();
}

function addItem() {
  const trimmed = itemInput.value.trim();
  if (!trimmed) {
    itemInput.focus();
    return;
  }
  if (items.includes(trimmed)) {
    alert("San pham da co trong danh sach");
    return;
  }
  items.push(trimmed);
  itemInput.value = "";
  itemInput.focus();
  renderItems();
}

function removeItem(index) {
  items.splice(index, 1);
  renderItems();
}

// Events
addBtn.addEventListener("click", addItem);
itemInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addItem();
});
itemList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remove")) {
    removeItem(parseInt(e.target.dataset.index));
  }
});

// ===== Result Screen Logic =====

function showResults() {
  inputScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  fetchComparison();
}

function showInput() {
  resultScreen.classList.add("hidden");
  inputScreen.classList.remove("hidden");
}

compareBtn.addEventListener("click", showResults);
backBtn.addEventListener("click", showInput);
retryBtn.addEventListener("click", fetchComparison);

async function fetchComparison() {
  loadingEl.classList.remove("hidden");
  errorView.classList.add("hidden");
  resultsContent.classList.add("hidden");

  try {
    const res = await fetch("/api/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    if (!res.ok) throw new Error(`Server error: ${res.status}`);
    const data = await res.json();
    renderResults(data);
  } catch (err) {
    errorMsg.textContent = "Khong the ket noi den server. Vui long thu lai.";
    loadingEl.classList.add("hidden");
    errorView.classList.remove("hidden");
  }
}

function renderResults(data) {
  loadingEl.classList.add("hidden");
  resultsContent.classList.remove("hidden");

  // Summary card
  const totals = data.totals;
  const cheapest = totals.cheapestStore;
  const stores = Object.entries(totals.perStore);

  summaryCard.innerHTML = `
    <div class="summary-title">Tong Ket</div>
    ${cheapest ? `<div class="winner-badge">Re nhat: ${escapeHtml(cheapest)}</div>` : ""}
    ${stores
      .map(
        ([store, info]) => `
      <div class="total-row ${store === cheapest ? "winner" : ""}">
        <span class="store-dot ${dotClass(store)}"></span>
        <span class="total-store-name">${escapeHtml(store)}</span>
        <div class="total-right">
          <div class="total-price ${store === cheapest ? "winner-price" : ""}">${formatPrice(info.total)}</div>
          <div class="total-count">${info.itemsFound}/${info.itemsTotal} san pham</div>
        </div>
      </div>
    `
      )
      .join("")}
  `;

  // Per-item details
  itemsDetail.innerHTML =
    data.comparisons
      .map(
        (comp, i) => `
    <div class="item-card">
      <div class="item-card-title">${i + 1}. ${escapeHtml(comp.searchTerm)}</div>
      ${comp.prices
        .map((p) => {
          const isCheapest = p.store === comp.cheapestStore;
          if (!p.product) {
            return `
            <div class="price-row">
              <div class="price-left">
                <span class="store-dot ${dotClass(p.store)}"></span>
                <span class="store-name">${escapeHtml(p.store)}</span>
              </div>
              <div class="price-right">
                <span class="not-found">Khong tim thay</span>
              </div>
            </div>`;
          }
          const effective = p.product.salePrice || p.product.price;
          return `
          <div class="price-row ${isCheapest ? "cheapest" : ""}">
            <div class="price-left">
              <span class="store-dot ${dotClass(p.store)}"></span>
              <span class="store-name">${escapeHtml(p.store)}</span>
            </div>
            <div class="price-right">
              ${p.product.hasPromotion ? '<span class="promo-badge">KM</span>' : ""}
              ${p.product.hasPromotion ? `<span class="original-price">${formatPrice(p.product.price)}</span>` : ""}
              <span class="price ${isCheapest ? "cheapest-price" : ""}">${formatPrice(effective)}</span>
            </div>
          </div>`;
        })
        .join("")}
      ${comp.cheapestStore ? `<div class="cheapest-label">Re nhat tai ${escapeHtml(comp.cheapestStore)}</div>` : ""}
    </div>
  `
      )
      .join("") + '<div class="bottom-spacer"></div>';
}

// ===== Helpers =====

function formatPrice(price) {
  if (!price) return "---";
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "d";
}

function dotClass(store) {
  if (store.includes("Co.op")) return "dot-coop";
  if (store.includes("Emart")) return "dot-emart";
  if (store.includes("Big C")) return "dot-bigc";
  return "";
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
