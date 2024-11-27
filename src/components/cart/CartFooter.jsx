import React, { useContext, useState } from "react";
import { Global } from "../../provider/GlobalContext";

export default function CartFooter() {
  const { carts } = useContext(Global);
  const totalCart = carts?.reduce(
    (pre, curr) => pre + curr.price * curr.qty,
    0
  );
  return (
    <>
      <footer className="text-[20px] border-t pt-2">
        Tổng tiền: {totalCart}
      </footer>
    </>
  );
}
