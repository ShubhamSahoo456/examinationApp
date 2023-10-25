import React, { useState } from "react";
import TabbleComponent from "../../components/Table";
import {
  FloatButton,
  Input,
  DatePicker,
  Form,
  Space,
  Select,
  Col,
  Row,
} from "antd";
import {
  DownloadOutlined,
  UserAddOutlined,
  PlusOutlined,
  UploadOutlined
} from "@ant-design/icons";
import FloatButtonGroup from "../../components/FloatButtonGroup";
import AddSchoolModal from "../../components/modals/AddSchoolModal";


const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};


const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: "2%",
  },
  {
    title: "Name",
    dataIndex: "name",
    width: "4%",

  },
  {
    title: "Gaurdian Name",
    dataIndex: "gaurdianName",
    width: "4%",

  },
  {
    title: "Age",
    dataIndex: "age",
    width: "3%",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Admission No.",
    dataIndex: "admissionNo",
    width: "3%",

  },
  {
    title: "School",
    dataIndex: "school",
    width: "2%",

  },
  {
    title: "School Class",
    dataIndex: "schoolClass",
    width: "2%",

  },
  {
    title: "Section",
    dataIndex: "section",
    width: "2%",

  },
  {
    title: "Exam Key",
    dataIndex: "examKey",
    width: "3%",

  },

];
const data = [
  {
    id: "1",
    name: "John Brown",
    gaurdianName: "Bhola Pandit",
    age: 23,
    admissionNo: "12323",
    passPercentage: 32,
    school: "New York School",
    schoolClass: "X",
    section: "B",
    examKey: "ahkhdi"
  },
  {
    id: "2",
    name: "John Brown",
    gaurdianName: "Bhola Pandit",
    age: 23,
    admissionNo: "12323",
    passPercentage: 32,
    school: "New York School",
    schoolClass: "X",
    section: "B",
    examKey: "ahkhdi"
  },
  {
    id: "3",
    name: "John Brown",
    gaurdianName: "Bhola Pandit",
    age: 23,
    admissionNo: "12323",
    passPercentage: 32,
    school: "New York School",
    schoolClass: "X",
    section: "B",
    examKey: "ahkhdi"
  },
  {
    id: "4",
    name: "John Brown",
    gaurdianName: "Bhola Pandit",
    age: 23,
    admissionNo: "12323",
    passPercentage: 32,
    school: "New York School",
    schoolClass: "X",
    section: "B",
    examKey: "ahkhdi"
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
          icon={<UserAddOutlined />}
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
      >

        <Form name="trigger" layout="vertical" autoComplete="off">
          <Row gutter={16}>
            <Col md={12}>
              <Form.Item label="Name" required name="studentName">
                <Input placeholder="Enter student name" />
              </Form.Item>
            </Col>
            <Col md={12}>
              <Form.Item label="Father Name" required name="fatherName">
                <Input placeholder="Enter father name" />
              </Form.Item>
            </Col>
            <Col md={6}>
              <Form.Item label="Admission Number" required name="admissionNo">
                <Input type="number" placeholder="Enter admission number" />
              </Form.Item>
            </Col>
            <Col md={6}>
              <Form.Item label="DOB" required name="dob">
                <DatePicker placeholder="Enter admission number" />
              </Form.Item>
            </Col>

            <Col md={6}>
              <Form.Item label="Select Class" required name="class">
                <Select allowClear placeholder="Select Class">
                  <Select.Option>10</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={6}>
              <Form.Item label="Select Section" required name="section">
                <Select allowClear placeholder="Select Section">
                  <Select.Option>A</Select.Option>
                  <Select.Option>B</Select.Option>
                  <Select.Option>C</Select.Option>
                  <Select.Option>D</Select.Option>
                  <Select.Option>E</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={16}>
              <Form.Item label="Select School" required name="schoolName">
                <Select allowClear placeholder="Select School">
                  <Select.Option>Oxford</Select.Option>
                  <Select.Option>Ronaldo</Select.Option>
                  <Select.Option>Brampton</Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={8}>
              <Form.Item label="Contact Number" required name="contact">
                <Space direction="vertical" size="middle">

                  <Space.Compact>
                    <Input style={{ width: '20%' }} defaultValue="+91" disabled />
                    <Input style={{ width: '80%' }} placeholder="88888888" />
                  </Space.Compact>
                </Space>
              </Form.Item>
            </Col>

          </Row>
        </Form>
      </AddSchoolModal>
    </>
  );
};

export default AdminStudentPage;
