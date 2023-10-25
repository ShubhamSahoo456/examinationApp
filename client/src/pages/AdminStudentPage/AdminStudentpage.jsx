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
    title: "School Name",
    dataIndex: "schoolName",
    width: "30%",
  },
  {
    title: "Pass Percentage",
    dataIndex: "passPercentage",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];
const data = [
  {
    key: "1",
    schoolName: "John Brown",
    passPercentage: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    schoolName: "Jim Green",
    passPercentage: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    schoolName: "Joe Black",
    passPercentage: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    schoolName: "Jim Red",
    passPercentage: 32,
    address: "London No. 2 Lake Park",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminStudentPage = () => {
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
      <AddSchoolModal
        open={StudentOpen}
        setOpen={() => setStudentOpen(false)}
      />
    </>
  );
};

export default AdminStudentPage;
