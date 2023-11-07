import React from "react";
import AdminLayout from "./AdminLayout";
import AuthLayout from "./AuthLayout";

const Layouts = {
  admin: AdminLayout,
  auth: AuthLayout,
};

const getLayout = () => {
  if (window.location.pathname.startsWith("/admin")) {
    return "admin";
  } else if (window.location.pathname.startsWith("/auth")) {
    return "auth";
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
