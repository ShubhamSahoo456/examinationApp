import React, { useState } from "react";
import TabbleComponent from "../../components/Table";
import {
  Col,
  FloatButton,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Upload,
} from "antd";
import {
  CloseOutlined,
  DownloadOutlined,
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import AddSchoolModal from "../../components/modals/AddSchoolModal";
import { exportToExcel, uploadFromExcel } from "../../components/helper/helper";

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

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      ></div>
    </div>
  );
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
        <FloatButton
          icon={<UploadOutlined />}
          type="primary"
          shape="circle"
          onClick={() => uploadFromExcel(data)}

        />
        <FloatButton
          icon={<DownloadOutlined />}
          type="primary"
          shape="circle"
          onClick={() => exportToExcel(data)}
        />
      </FloatButton.Group>
      <AddSchoolModal open={SchoolOpen} setOpen={() => setSchoolOpen(false)}>
        <Form name="trigger" layout="vertical" autoComplete="off">
          <Row gutter={16}>
            <Col md={8}>
              <Form.Item label="School Name" required name="schoolName">
                <Input placeholder="Enter School Name" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Select School Type" required name="schoolType">
                <Select allowClear placeholder="Select School Type">
                  <Select.Option>Government</Select.Option>
                  <Select.Option>Private</Select.Option>
                  <Select.Option>Others</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Contact Number" required name="contact">
                <Input max={10} addonBefore="+91" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="School Website" required name="schoolWebsite">
                <Input addonBefore="https://" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="School Number" required name="schoolNumber">
                <Input max={10} addonBefore="+91" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item
                label="School Email Address"
                required
                name="schoolEmail"
              >
                <Input placeholder="Enter School Email" />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="Enter Full Address" name="schoolAddress">
                <Input.TextArea
                  showCount
                  maxLength={100}
                  style={{ height: 100, resize: "none" }}
                />
              </Form.Item>
            </Col>
            <Col
              md={12}
              className="d-flex align-items-center justify-content-center"
            >
              <Form.Item name="schoolLogo" label="Upload Logo">
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  // beforeUpload={beforeUpload}
                  // onChange={handleChange}
                >
                  {uploadButton}
                </Upload>
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Enter Username" required name="userName">
                <Input placeholder="Enter Username" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item label="Enter Password" required name="password">
                <Input placeholder="Enter Username" type="password" />
              </Form.Item>
            </Col>
            <Col md={8}>
              <Form.Item
                label="Confirm Password"
                required
                name="confirmPassword"
              >
                <Input placeholder="Enter Confirm Password" type="password" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </AddSchoolModal>
    </>
  );
};
export default AdminSchoolPage;
