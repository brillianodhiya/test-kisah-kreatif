import React from "react";
import Icon from "@ant-design/icons";

const Svg = () => (
  <svg
    width="33"
    height="18"
    viewBox="0 0 48 26"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.0958252 2.58691H46.938M0.0958252 13.1632H46.938M0.40094 23.1632H47.2431"
      stroke="#395998"
      strokeWidth="4"
    />
  </svg>
);

const BurgerIcon = (props) => {
  return <Icon component={Svg} {...props} />;
};

export default BurgerIcon;
