import React from "react";
import Icon from "@ant-design/icons";

const Svg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12Z"
      fill="white"
    />
    <path
      d="M12 14C7.03172 14.0055 3.00553 18.0317 3 23C3 23.5523 3.4477 24 3.99998 24H20C20.5522 24 21 23.5523 21 23C20.9945 18.0317 16.9683 14.0055 12 14Z"
      fill="white"
    />
  </svg>
);

const UsersIcon = (props) => {
  return <Icon component={Svg} {...props} />;
};

export default UsersIcon;
