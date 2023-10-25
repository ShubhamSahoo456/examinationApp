import React from "react";
import AdminLayout from "./AdminLayout";

const Layouts = {
  admin: AdminLayout,
};

const getLayout = () => {
  if (window.location.pathname.startsWith("/admin")) {
    return "admin";
  } else {
    return "main";
  }
};

const Container = Layouts[getLayout()];
const Layout = ({ children }) => {
  console.log(children);
  return <Container>{children}</Container>;
};

export default Layout;
