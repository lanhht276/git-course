import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const API_URL = "http://localhost:3000";

const STORE_COLORS = {
  "Co.op Mart": "#1B5E20",
  Emart: "#E65100",
  "Big C": "#1565C0",
};

function formatPrice(price) {
  if (!price) return "---";
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "d";
}

export default function ResultScreen({ route, navigation }) {
  const { items } = route.params;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchComparison();
  }, []);

  const fetchComparison = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${API_URL}/api/compare`, { items });
      setData(response.data);
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError("Khong the ket noi den server. Vui long thu lai.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#FF6B35" />
        <Text style={styles.loadingText}>
          Dang tim kiem gia...{"\n"}Vui long doi trong giay lat
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={fetchComparison} style={styles.retryBtn}>
          <Text style={styles.retryBtnText}>Thu lai</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Overall summary */}
      {data?.totals && (
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Tong Ket</Text>
          {data.totals.cheapestStore && (
            <View style={styles.winnerBadge}>
              <Text style={styles.winnerText}>
                Re nhat: {data.totals.cheapestStore}
              </Text>
            </View>
          )}
          <View style={styles.totalsList}>
            {Object.entries(data.totals.perStore).map(([store, info]) => (
              <View
                key={store}
                style={[
                  styles.totalRow,
                  store === data.totals.cheapestStore &&
                    styles.totalRowWinner,
                ]}
              >
                <View
                  style={[
                    styles.storeDot,
                    { backgroundColor: STORE_COLORS[store] || "#666" },
                  ]}
                />
                <Text style={styles.totalStoreName}>{store}</Text>
                <View style={styles.totalRight}>
                  <Text
                    style={[
                      styles.totalPrice,
                      store === data.totals.cheapestStore &&
                        styles.totalPriceWinner,
                    ]}
                  >
                    {formatPrice(info.total)}
                  </Text>
                  <Text style={styles.totalCount}>
                    {info.itemsFound}/{info.itemsTotal} san pham
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Per-item comparison */}
      <Text style={styles.sectionTitle}>Chi Tiet Tung San Pham</Text>
      {data?.comparisons?.map((comp, index) => (
        <View key={index} style={styles.itemCard}>
          <Text style={styles.itemTitle}>
            {index + 1}. {comp.searchTerm}
          </Text>
          {comp.prices.map((p) => {
            const isCheapest = p.store === comp.cheapestStore;
            const effectivePrice = p.product
              ? p.product.salePrice || p.product.price
              : null;

            return (
              <View
                key={p.store}
                style={[styles.priceRow, isCheapest && styles.priceRowCheapest]}
              >
                <View style={styles.priceLeft}>
                  <View
                    style={[
                      styles.storeDot,
                      { backgroundColor: STORE_COLORS[p.store] || "#666" },
                    ]}
                  />
                  <Text style={styles.storeName}>{p.store}</Text>
                </View>

                <View style={styles.priceRight}>
                  {p.product ? (
                    <>
                      {p.product.hasPromotion && (
                        <View style={styles.promoBadge}>
                          <Text style={styles.promoText}>KM</Text>
                        </View>
                      )}
                      {p.product.hasPromotion && (
                        <Text style={styles.originalPrice}>
                          {formatPrice(p.product.price)}
                        </Text>
                      )}
                      <Text
                        style={[
                          styles.price,
                          isCheapest && styles.priceCheapest,
                        ]}
                      >
                        {formatPrice(effectivePrice)}
                      </Text>
                    </>
                  ) : (
                    <Text style={styles.notFound}>Khong tim thay</Text>
                  )}
                </View>
              </View>
            );
          })}
          {comp.cheapestStore && (
            <Text style={styles.cheapestLabel}>
              Re nhat tai {comp.cheapestStore}
            </Text>
          )}
        </View>
      ))}

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
  },
  errorText: {
    fontSize: 16,
    color: "#D32F2F",
    textAlign: "center",
    marginBottom: 16,
  },
  retryBtn: {
    backgroundColor: "#FF6B35",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
  },
  retryBtnText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  summaryCard: {
    backgroundColor: "#FFF",
    margin: 16,
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  winnerBadge: {
    backgroundColor: "#E8F5E9",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 16,
  },
  winnerText: {
    color: "#2E7D32",
    fontWeight: "bold",
    fontSize: 16,
  },
  totalsList: {
    gap: 8,
  },
  totalRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#FAFAFA",
  },
  totalRowWinner: {
    backgroundColor: "#E8F5E9",
    borderWidth: 1,
    borderColor: "#A5D6A7",
  },
  storeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  totalStoreName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
  totalRight: {
    alignItems: "flex-end",
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  totalPriceWinner: {
    color: "#2E7D32",
  },
  totalCount: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
  },
  itemCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 4,
  },
  priceRowCheapest: {
    backgroundColor: "#E8F5E9",
  },
  priceLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  storeName: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  priceRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  promoBadge: {
    backgroundColor: "#FF6B35",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  promoText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  originalPrice: {
    fontSize: 13,
    color: "#999",
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  priceCheapest: {
    color: "#2E7D32",
  },
  notFound: {
    fontSize: 13,
    color: "#CCC",
    fontStyle: "italic",
  },
  cheapestLabel: {
    marginTop: 8,
    fontSize: 13,
    color: "#2E7D32",
    fontWeight: "600",
    textAlign: "right",
  },
  bottomSpacer: {
    height: 40,
  },
});
