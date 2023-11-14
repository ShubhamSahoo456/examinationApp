import React from "react";
import { Breadcrumb, Image, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
const StudentLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#813867",
          backgroundImage: "linear-gradient(315deg, #813867 0%, #ebebeb 74%)",
        }}
      >
        <Image
          className="img_display"
          width={100}
          height={50}
          src="https://www.myndkare.com/wp-content/uploads/2021/05/cropped-myndkare-logo-115x57.png"
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          backgroundColor: "#ffffff",
          height: "80vh",
        }}
      >
        {children}
      </Content>
      {/* <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          color: "black",
        }}
      >
        MyndKare ©2023 Created by MyndKare UED
      </Footer> */}
    </Layout>
  );
};
export default StudentLayout;
