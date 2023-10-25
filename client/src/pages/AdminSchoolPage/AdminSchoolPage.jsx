import React, { useState } from "react";
import TabbleComponent from "../../components/Table";
import { FloatButton } from "antd";
import {
  CloseOutlined,
  DownloadOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import AddSchoolModal from "../../components/modals/AddSchoolModal";
import { exportToExcel } from "../../components/helper/helper";

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
  {
    key: "5",
    schoolName: "John Brown",
    passPercentage: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "6",
    schoolName: "Jim Green",
    passPercentage: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "7",
    schoolName: "Joe Black",
    passPercentage: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "8",
    schoolName: "Jim Red",
    passPercentage: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "9",
    schoolName: "John Brown",
    passPercentage: 32,
    address: "New York No. 1 Lake Park",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const AdminSchoolPage = () => {
  const [SchoolOpen, setSchoolOpen] = useState(false);
  return (
    <>
      <TabbleComponent columns={columns} data={data} onChange={onChange} />
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 70 }}
        icon={<PlusOutlined />}
      >
        <FloatButton
          icon={<PlusOutlined />}
          type="primary"
          shape="circle"
          onClick={() => setSchoolOpen(true)}
        />
        <FloatButton icon={<UploadOutlined />} type="primary" shape="circle" />
        <FloatButton
          icon={<DownloadOutlined />}
          type="primary"
          shape="circle"
          onClick={() => exportToExcel(data)}
        />
      </FloatButton.Group>
      <AddSchoolModal open={SchoolOpen} setOpen={() => setSchoolOpen(false)} />
    </>
  );
};
export default AdminSchoolPage;
