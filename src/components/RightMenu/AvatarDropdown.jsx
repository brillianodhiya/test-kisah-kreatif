import { Avatar, Space } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

const AvatarDropdown = () => {
  return (
    <Space size={"middle"} className="avatar-dropdown__container">
      <div className="avatar-dropdown__content-text">
        <h4>Khevin Reinal G.</h4>
        <p>PIC PILOG</p>
      </div>
      <Avatar
        icon={<UserOutlined />}
        style={{ backgroundColor: "rgba(57, 89, 153, 1)" }}
      />
    </Space>
  );
};

export default AvatarDropdown;
