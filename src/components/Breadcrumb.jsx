import { Breadcrumbs, Item } from "@adobe/react-spectrum";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path !== "");
  console.log(paths);

  return (
    <Breadcrumbs>
      <Item key={"home"} href="/">
        Home
      </Item>
      {paths.map((path, index) => {
        const decodedPath = decodeURIComponent(path);
        const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
        return (
          <Item key={decodedPath} href={routeTo}>
            {decodedPath}
          </Item>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
