import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function InputScreen({ navigation }) {
  const [currentItem, setCurrentItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    const trimmed = currentItem.trim();
    if (!trimmed) {
      Alert.alert("Lỗi", "Vui lòng nhập tên sản phẩm");
      return;
    }
    if (items.includes(trimmed)) {
      Alert.alert("Lỗi", "Sản phẩm đã có trong danh sách");
      return;
    }
    setItems([...items, trimmed]);
    setCurrentItem("");
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const compareItems = () => {
    if (items.length === 0) {
      Alert.alert("Lỗi", "Vui lòng thêm ít nhất 1 sản phẩm");
      return;
    }
    navigation.navigate("Result", { items });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemNumber}>{index + 1}</Text>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableOpacity
        onPress={() => removeItem(index)}
        style={styles.removeBtn}
      >
        <Text style={styles.removeBtnText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <Text style={styles.title}>So Sanh Gia</Text>
        <Text style={styles.subtitle}>
          Co.op Mart - Emart - Big C
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhap ten san pham (VD: sua tuoi, gao...)"
          value={currentItem}
          onChangeText={setCurrentItem}
          onSubmitEditing={addItem}
          returnKeyType="done"
        />
        <TouchableOpacity onPress={addItem} style={styles.addBtn}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>
          Danh sach ({items.length} san pham)
        </Text>
        {items.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              Chua co san pham nao.{"\n"}Nhap ten san pham va nhan + de them.
            </Text>
          </View>
        ) : (
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}
            style={styles.list}
          />
        )}
      </View>

      <TouchableOpacity
        onPress={compareItems}
        style={[
          styles.compareBtn,
          items.length === 0 && styles.compareBtnDisabled,
        ]}
        disabled={items.length === 0}
      >
        <Text style={styles.compareBtnText}>
          So Sanh Gia ({items.length} san pham)
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#FF6B35",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#FFE0D0",
    textAlign: "center",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  addBtn: {
    backgroundColor: "#FF6B35",
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  list: {
    flex: 1,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  itemNumber: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF6B35",
    marginRight: 12,
    width: 24,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  removeBtn: {
    backgroundColor: "#FF4444",
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  removeBtnText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 15,
    color: "#999",
    textAlign: "center",
    lineHeight: 24,
  },
  compareBtn: {
    backgroundColor: "#FF6B35",
    marginHorizontal: 16,
    marginBottom: 34,
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  compareBtnDisabled: {
    backgroundColor: "#CCC",
  },
  compareBtnText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
