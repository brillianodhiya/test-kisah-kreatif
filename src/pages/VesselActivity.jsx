import { Col, Row, Typography } from "antd";
import React from "react";
import CardKM from "../components/Card/CardKM";

const KMlist = [
  "KM Abusamah",
  "KM Ibrahim Zahier",
  "KM Julianto Moeliodihardjo",
  "KM Mochtar Prabu Mangkunegara",
  "KM Pusri Indonesia",
  "SPUB PI 1",
  "KM Soemantri Brodjonegoro",
  "MT Salmon Mustofa",
  "MT Sultan Mahmud Badaruddin II",
];

const VesselActivity = () => {
  return (
    <div>
      <div className="header-content">
        <Typography.Title
          level={2}
          style={{
            color: "#36599A",
          }}
        >
          Vessel Activity
        </Typography.Title>
      </div>
      <div className="content__container">
        <Row gutter={[16, 16]}>
          {KMlist.map((val) => {
            return (
              <Col
                style={{ padding: "10px 18px" }}
                key={val}
                xs={24}
                sm={12}
                md={12}
                lg={8}
                xl={8}
                xxl={8}
              >
                <CardKM label={val} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default VesselActivity;
