import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
const AppLayOut = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default AppLayOut;
