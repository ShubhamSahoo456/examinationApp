import React, { Children, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  TeamOutlined,
  HomeOutlined,
  BookOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        style={{ height: "100vh" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <NavLink to="/admin/school">
                  <HomeOutlined />
                </NavLink>
              ),
              label: "School",
            },
            {
              key: "2",
              icon: (
                <NavLink to="/admin/student">
                  <TeamOutlined />
                </NavLink>
              ),
              label: "Student",
            },
            {
              key: "3",
              icon: (
                <NavLink to="/admin/exam">
                  <BookOutlined />
                </NavLink>
              ),
              label: "Exams",
            },
            {
              key: "4",
              icon: <QuestionCircleFilled />,
              label: "Questions",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
