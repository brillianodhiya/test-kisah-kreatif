import { Space, Typography } from "antd";
import React from "react";
import BoxShipIcon from "../Icon/BoxShipIcon";
import { Link } from "react-router-dom";

const CardKM = ({ label = "" }) => {
  return (
    <Link to={"/sub?key=" + label}>
      <div className="card-box__vessel">
        <Space size={"large"}>
          <BoxShipIcon />
          <Typography.Text className="name__vessel">{label}</Typography.Text>
        </Space>
      </div>
    </Link>
  );
};

export default CardKM;
