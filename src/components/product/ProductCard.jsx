import { Button } from "antd";
import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Global } from "../../provider/GlobalContext";

export default function ProductCard({ product }) {
  const { handleAddToCart } = useContext(Global);

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={product.image} alt="" />
        </a>
        <div className="p-5 text-center">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
              {product.productName}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">{product.price}</p>
          <Button
            type="primary"
            className=" w-[90%]"
            onClick={() => handleAddToCart(product)}
          >
            <IoCartOutline className="text-[20px]" />
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </>
  );
}
