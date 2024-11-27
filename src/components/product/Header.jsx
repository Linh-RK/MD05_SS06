import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../cart/Cart";
import { Global } from "../../provider/GlobalContext";

export default function Header() {
  const [isShowCart, setIsShowCard] = useState(false);
  const { carts } = useContext(Global);
  const handleShowCart = () => {
    setIsShowCard((pre) => !pre);
  };
  return (
    <>
      <header className="sticky z-50 top-0 w-full-screen h-[64px] bg-orange-400 flex justify-between items-center text-white px-4 ">
        <ul className="flex gap-3">
          <li>Trang chủ</li>
          <li>Danh sách sản phẩm</li>
        </ul>

        <div className="flex relative">
          <FaCartPlus size={30} onClick={handleShowCart} />
          <p
            size={20}
            className="absolute  -right-4 -top-2 bg-red-800 rounded-2xl size-6 text-center"
          >
            {carts.length > 9 ? "9+" : carts.length}
          </p>
          {isShowCart && <Cart></Cart>}
        </div>
      </header>
    </>
  );
}
