import React, { useContext, useState } from "react";
import Header from "../components/product/Header";
import ListProduct from "../components/product/ListProduct";
import products from "../db.json";

export const Global = React.createContext();
export default function GlobalContext() {
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );

  const saveData = (key, value) => {
    setCarts(value);

    localStorage.setItem(key, JSON.stringify(value));
  };
  const INCREMENT_QTY = "add";
  const DECREMENT_QTY = "subtract";
  //   Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    // Nếu đã có trong giỏ hàng
    if (carts.some((item) => item.id === product.id)) {
      const newCarts = carts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              qty: item.qty + 1 > item.stock ? item.stock : item.qty + 1,
            }
          : item
      );
      saveData("carts", newCarts);
    } else {
      // Nếu chưa có trong giỏ hàng
      const newCarts = [...carts, { ...product, qty: 1 }];
      saveData("carts", newCarts);
    }
  };

  //   Xóa sản phẩm khỏi giỏ hàng
  const handleDelete = (product) => {
    const newCarts = carts.filter((item) => item.id !== product.id);
    saveData("carts", newCarts);
  };

  //   Cập nhật số lượng
  const handleUpdateQty = (action, product) => {
    if (action === INCREMENT_QTY) {
      const newCarts = carts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              qty: item.qty + 1 > item.stock ? item.stock : item.qty + 1,
            }
          : item
      );
      saveData("carts", newCarts);
    } else {
      const newCarts = carts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              qty: item.qty - 1 === 0 ? 1 : item.qty - 1,
            }
          : item
      );
      saveData("carts", newCarts);
    }
  };

  return (
    <Global.Provider
      value={{
        products,
        carts,
        handleAddToCart,
        handleDelete,
        handleUpdateQty,
      }}
    >
      <Header></Header>
      <ListProduct></ListProduct>
    </Global.Provider>
  );
}
