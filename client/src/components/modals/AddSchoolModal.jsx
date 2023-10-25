import React, { useState } from "react";
import { Modal } from "antd";
const AddSchoolModal = ({ open, setOpen }) => {
  return (
    <>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default AddSchoolModal;
