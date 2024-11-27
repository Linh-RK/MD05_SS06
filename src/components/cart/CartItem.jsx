import { Button, Image, Modal } from "antd";
import React, { useContext, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Global } from "../../provider/GlobalContext";

export default function CartItem({ item }) {
  const { handleDelete, handleUpdateQty } = useContext(Global);
  const [isShowModal, setIsShowModel] = useState(false);
  const [itemCart, setItemCart] = useState(null);

  const handleShowModal = (item) => {
    setIsShowModel(true);
    setItemCart(item);
  };
  const handleCloseModal = () => {
    setIsShowModel(false);
  };
  const handleConfirmDelete = () => {
    handleDelete(itemCart);
    handleCloseModal();
  };

  return (
    <>
      <Modal
        onCancel={handleCloseModal}
        onOk={handleConfirmDelete}
        title="Xác nhận"
        open={isShowModal}
        okText="Xóa"
        cancelText="Hủy"
      >
        Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng?
      </Modal>
      <li className="flex gap-3 justify-between p-3">
        <div className="flex gap-3 items-center">
          <Image
            src={item.image}
            className="rounded-full"
            height={50}
            width={50}
          ></Image>
          <p>{item.productName}</p>
        </div>
        <div className="flex gap-3 items-center">
          <Button onClick={() => handleUpdateQty("subtract", item)} size={12}>
            -
          </Button>
          <p>{item?.qty}</p>
          <Button onClick={() => handleUpdateQty("add", item)}>+</Button>
          <FaRegTrashCan size={20} onClick={() => handleShowModal(item)} />
        </div>
      </li>
    </>
  );
}
