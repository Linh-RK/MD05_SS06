import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { Global } from "../../provider/GlobalContext";

export default function ListProduct() {
  const { products } = useContext(Global);
  return (
    <>
      <main className="container m-auto max-w-[1360px] px-[60px] pt-[24px]">
        <h2 className="text-center text-[32px] text-semibold">
          Danh sách sản phẩm
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ProductCard product={product}></ProductCard>
            </React.Fragment>
          ))}
        </div>
      </main>
    </>
  );
}
