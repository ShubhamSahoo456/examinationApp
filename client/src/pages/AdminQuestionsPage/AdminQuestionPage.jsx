import React, { useState } from "react";
import TabbleComponent from "../../components/Table";
import { FloatButton } from "antd";
import {
  DownloadOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import FloatButtonGroup from "../../components/FloatButtonGroup";
import AddSchoolModal from "../../components/modals/AddSchoolModal";
const columns = [
  {
    title: "Module name",
    dataIndex: "moduleName",
    sorter: (a, b) => a.age - b.age,
    width: "10%",
  },
  {
    title: "Question",
    dataIndex: "question",
    width: "30%",
  },
  {
    title: "Answer",
    dataIndex: "correctAnswer",
    width: "10%",
  },
];
const data = [
  {
    key: "1",
    moduleName: "Hindi",
    question: "What is your name",
    correctAnswer: "shubham",
  },
  {
    key: "2",
    moduleName: "Hindi",
    question: "What is your name",
    correctAnswer: "shubham",
  },
  {
    key: "3",
    moduleName: "Hindi",
    question: "What is your name",
    correctAnswer: "shubham",
  },
  {
    key: "4",
    moduleName: "Hindi",
    question: "What is your name",
    correctAnswer: "shubham",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminQuestionpage = () => {
  const [StudentOpen, setStudentOpen] = useState(false);
  return (
    <>
      <TabbleComponent columns={columns} data={data} onChange={onChange} />
      <FloatButtonGroup>
        <FloatButton
          onClick={() => setStudentOpen(true)}
          icon={<PlusOutlined />}
          type="primary"
          shape="circle"
        />
        <FloatButton icon={<UploadOutlined />} type="primary" shape="circle" />
        <FloatButton
          icon={<DownloadOutlined />}
          type="primary"
          shape="circle"
        />
      </FloatButtonGroup>
      <AddSchoolModal open={StudentOpen} setOpen={() => setStudentOpen(false)}>
        <h1>vjgvjd</h1>
      </AddSchoolModal>
    </>
  );
};

export default AdminQuestionpage;
