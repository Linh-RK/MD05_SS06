import React, { useContext } from "react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { Global } from "../../provider/GlobalContext";

export default function Cart() {
  const { carts } = useContext(Global);
  return (
    <>
      <div className="z-50 absolute border w-[450px] max-h-[600px] min-h-[600px] right-0 rounded-md bg-slate-800 p-5 shadow-md top-[64px]">
        <CartHeader></CartHeader>
        <div className="min-h-[480px]">
          {carts.length < 1 ? (
            <>
              <p className="text-[24px] text-center items-center pt-[200px]">
                Giỏ hàng trống
              </p>
            </>
          ) : (
            <ul>
              {carts?.map((item) => (
                <React.Fragment key={item.id}>
                  <CartItem item={item}></CartItem>
                </React.Fragment>
              ))}
            </ul>
          )}
        </div>

        <CartFooter></CartFooter>
      </div>
    </>
  );
}
