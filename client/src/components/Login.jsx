import React from "react";
import { Col, Form, Input, Row, Image, Select } from "antd";

function Login() {
  return (
    <section class="h-100 d-flex align-items-center justify-content-center">
      <div class="container-fluid">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div class="form-outline mb-4">
                <label class="form-label" for="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  class="form-control"
                  placeholder="Enter Username"
                />
              </div>

              <div class="form-outline mb-3">
                <label class="form-label" for="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary"
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
