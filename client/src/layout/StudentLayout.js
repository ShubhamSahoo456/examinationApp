import React, { useState } from "react";
import { Avatar, Image, Layout, Menu, Popover, theme } from "antd";
const { Header, Content, Footer } = Layout;
const StudentLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const studentInfo = {
    name: "Mandan Kumar",
    rollNo: "12345",
    fatherName: "Ranjan Kumar",
  };
  const Title = "Madan Kumar";
  const content = (
    <div>
      <p className="m-0">
        <b>Roll No:</b>
        {studentInfo.rollNo}
      </p>
      <p className="m-0">
        <b>Father's Name:</b>
        {studentInfo.fatherName}
      </p>
      <a className="m-0" onClick={hide}>
        Close
      </a>
    </div>
  );
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        className="d-flex justify-content-between"
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
        <div>
          <Popover
            content={content}
            title={Title}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Avatar style={{ backgroundColor: "#87d068" }} size={40}>
              M K
            </Avatar>
            <span className="text-white mx-2">{Title}</span>
          </Popover>
        </div>
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
