import React from "react";
import AdminLayout from "./AdminLayout";
import AuthLayout from "./AuthLayout";
import StudentLayout from "./StudentLayout";

const Layouts = {
  admin: AdminLayout,
  auth: AuthLayout,
  student: StudentLayout,
};

const getLayout = () => {
  if (window.location.pathname.startsWith("/admin")) {
    return "admin";
  } else if (window.location.pathname.startsWith("/auth")) {
    return "auth";
  } else if (window.location.pathname.startsWith("/student")) {
    return "student";
  }
};

const Container = Layouts[getLayout()];
const Layout = ({ children }) => {
  console.log(children);
  return <Container>{children}</Container>;
};

export default Layout;
