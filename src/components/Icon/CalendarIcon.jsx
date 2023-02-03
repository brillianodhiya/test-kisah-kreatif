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
    <g clipPath="url(#clip0_60_74)">
      <path
        d="M6 11H18V14H6V11ZM6 19H13V16H6V19ZM24 5.5V24H0V5.5C0 3.57 1.57 2 3.5 2H6V0H9V2H15V0H18V2H20.5C22.43 2 24 3.57 24 5.5ZM21 21V9H3V21H21Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_60_74">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const CalendarIcon = (props) => {
  return <Icon component={Svg} {...props} />;
};

export default CalendarIcon;
