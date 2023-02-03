import React from "react";
import SkyImage from "../../assets/sky.svg";
import Wind from "../../assets/Group 35.svg";
import Cloud from "../../assets/cloud.svg";
import Vector from "../../assets/Vector.svg";
import { Typography } from "antd";

const CardSky = () => {
  return (
    <div className="card-cuaca">
      <div className="card-cuaca__header">
        <p>Jakarta, Indonesia</p>
      </div>
      <div className="card-cuaca__body">
        <div className="card-cuaca__body__content">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <img src={SkyImage} alt="sky-cerah" className="sky-icon" />
            <div
              style={{
                textAlign: "center",
              }}
              className="suhu-text"
            >
              <Typography.Title style={{ margin: 0 }}>32°</Typography.Title>
              <Typography.Text style={{ margin: 0 }}>
                sunny cloudy
              </Typography.Text>
            </div>
          </div>

          <div className="card-cuaca__body__content__detail">
            <div className="card-cuaca__body__content__detail__item">
              <img className="icon" alt="icon1" src={Wind} />
              <Typography.Text style={{ margin: "8px 0px 0px 0px" }}>
                16 km/h
              </Typography.Text>
            </div>
            <div className="card-cuaca__body__content__detail__item">
              <img className="icon" alt="icon2" src={Cloud} />

              <Typography.Text style={{ margin: "8px 0px 0px 0px" }}>
                83 %
              </Typography.Text>
            </div>
            <div className="card-cuaca__body__content__detail__item">
              <img className="icon" alt="icon3" src={Vector} />

              <Typography.Text style={{ margin: "8px 0px 0px 0px" }}>
                2 of 10
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSky;
