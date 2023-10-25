import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layout";
import routes from "./router";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <React.Suspense fallback>
                    <Component />
                  </React.Suspense>
                </Layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
