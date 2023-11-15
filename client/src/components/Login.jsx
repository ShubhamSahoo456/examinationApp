import React from "react";
import { Avatar, Space, Segmented } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Login() {
  const handleUserSelection = () => {};
  return (
    <section className="h-100 d-flex align-items-center justify-content-center">
      <div className="container-fluid">
        <center>
          <h1 className="mb-0">
            <b>MYNDKARE</b>
          </h1>
          <p>
            <u>CAREER ASSESSMENT PLATFORM</u>
          </p>
          <Space direction="vertical">
            <Segmented
              onClick={() => handleUserSelection()}
              options={[
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                      <div>Admin</div>
                    </div>
                  ),
                  value: "admin",
                },
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      <Avatar src="https://img.icons8.com/?size=512&id=17605&format=png"></Avatar>
                      <div>Institution</div>
                    </div>
                  ),
                  value: "institution",
                },
                {
                  label: (
                    <div
                      style={{
                        padding: 4,
                      }}
                    >
                      <Avatar src="	https://img.icons8.com/?size=512&id=23319&format=png" />
                      <div>Student</div>
                    </div>
                  ),
                  value: "student",
                },
              ]}
            />
          </Space>
        </center>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter Username"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  //   style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
