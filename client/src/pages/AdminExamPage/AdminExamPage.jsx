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
import { exportToExcel } from "../../components/helper/helper";
const columns = [
  {
    title: "Exam key",
    dataIndex: "examKey",
    width: "10%",
  },
  {
    title: "Module name",
    dataIndex: "moduleName",
    sorter: (a, b) => a.age - b.age,
    width: "10%",
  },
  {
    title: "Time Limit",
    dataIndex: "timeLimit",
    width: "10%",
  },
  {
    title: "Question",
    dataIndex: "questionsCount",
    width: "10%",
  },
];
const data = [
  {
    key: "1",
    examKey: "14012",
    moduleName: "Hindi",
    timeLimit: 60,
    questionsCount: 20,
  },
  {
    key: "2",
    examKey: "14012",
    moduleName: "Hindi",
    timeLimit: 60,
    questionsCount: 20,
  },
  {
    key: "3",
    examKey: "14012",
    moduleName: "Hindi",
    timeLimit: 60,
    questionsCount: 20,
  },
  {
    key: "4",
    examKey: "14012",
    moduleName: "Hindi",
    timeLimit: 60,
    questionsCount: 20,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminExamPage = () => {
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
          onClick={() => exportToExcel(data)}
        />
      </FloatButtonGroup>
      <AddSchoolModal
        open={StudentOpen}
        setOpen={() => setStudentOpen(false)}
      />
    </>
  );
};

export default AdminExamPage;
