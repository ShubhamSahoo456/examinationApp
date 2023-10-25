import React, { useState } from "react";
import { Modal } from "antd";
const AddSchoolModal = ({ children, open, setOpen, title = "" }) => {
  return (
    <>
      <Modal
        title={title}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        {children}
      </Modal>
    </>
  );
};
export default AddSchoolModal;
