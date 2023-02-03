import React from "react";
import Icon from "@ant-design/icons";

const Svg = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 13.5V25.5C4.5 28.3284 4.5 29.7426 5.37868 30.6213C6.25736 31.5 7.67157 31.5 10.5 31.5H25.5C28.3284 31.5 29.7426 31.5 30.6213 30.6213C31.5 29.7426 31.5 28.3284 31.5 25.5V10.5C31.5 7.67157 31.5 6.25736 30.6213 5.37868C29.7426 4.5 28.3284 4.5 25.5 4.5H13.5"
        stroke={"currentColor"}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22.5 22.5V24H24V22.5H22.5ZM11.5607 9.43934C10.9749 8.85355 10.0251 8.85355 9.43934 9.43934C8.85355 10.0251 8.85355 10.9749 9.43934 11.5607L11.5607 9.43934ZM21 12V22.5H24V12H21ZM22.5 21H12V24H22.5V21ZM23.5607 21.4393L11.5607 9.43934L9.43934 11.5607L21.4393 23.5607L23.5607 21.4393Z"
        fill={"currentColor"}
      />
    </svg>
  );
};

const InIcon = (props) => {
  return <Icon component={Svg} {...props} />;
};

export default InIcon;
