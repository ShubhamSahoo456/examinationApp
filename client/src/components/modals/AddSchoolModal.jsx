import React, { useState } from "react";
import { Modal } from "antd";
const AddSchoolModal = ({
  children,
  open,
  setOpen,
  title = "",
  width = 1000,
}) => {
  return (
    <>
      <Modal
        title={title}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={width}
      >
        {children}
      </Modal>
    </>
  );
};
export default AddSchoolModal;
