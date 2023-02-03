import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
  Typography,
} from "antd";
import React from "react";
import BoxShipIcon from "../components/Icon/BoxShipIcon";
import dayjs from "dayjs";
import InIcon from "../components/Icon/InIcon";

const SubPageVesselActivity = () => {
  const url = new URL(window.location.href);
  const key = url.searchParams.get("key");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
        <div className="card-title__sub-vessel">
          <Space size={"middle"}>
            <BoxShipIcon />

            <Typography.Text>{key}</Typography.Text>
          </Space>
        </div>
      </div>

      <div className="content__container__subpage">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[16, 16]}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={12}
              xxl={12}
              className="subpage__form"
            >
              <Form.Item label="Voyage" initialValue="19" name="voyage">
                <Input size="large" placeholder="Input Voyage" />
              </Form.Item>
              <Form.Item
                label="Position"
                initialValue="Surabaya"
                name="position"
              >
                <Input size="large" placeholder="Input Position" />
              </Form.Item>
              <Form.Item
                label="Activity"
                name="activity"
                initialValue={"Discharge"}
              >
                <Input size="large" placeholder="Input Voyage" />
              </Form.Item>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="ETA"
                    name="eta"
                    rules={[
                      {
                        type: "object",
                        message: "Please select time!",
                      },
                    ]}
                    initialValue={dayjs("2022-10-29", "YYYY-MM-DD")}
                  >
                    <DatePicker format={"DD/MM/YYYY"} size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="ETD"
                    name="etd"
                    initialValue={dayjs("2022-12-02", "YYYY-MM-DD")}
                    rules={[
                      {
                        type: "object",
                        message: "Please select time!",
                      },
                    ]}
                  >
                    <DatePicker
                      style={
                        {
                          // width: refWidth.current.input.clientWidth,
                        }
                      }
                      format={"DD/MM/YYYY"}
                      size="large"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Cargo BL" name="cargo_bl" initialValue={"0,00"}>
                <InputNumber
                  addonBefore={<div style={{ width: "100px" }}> PSP </div>}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  className="blue-left"
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
              <Form.Item label="RoB" name="rob" initialValue={"0,00"}>
                <InputNumber
                  addonBefore={<div style={{ width: "100px" }}> COB </div>}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  className="gray-left"
                  size="large"
                />
              </Form.Item>
              <Form.Item name="fuel" initialValue={254}>
                <InputNumber
                  addonBefore={<div style={{ width: "100px" }}> FUEL </div>}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  className="gray-left"
                  size="large"
                />
              </Form.Item>
              <Form.Item name="lo" initialValue={528}>
                <InputNumber
                  addonBefore={<div style={{ width: "100px" }}> LO </div>}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  className="gray-left"
                  size="large"
                />
              </Form.Item>
              <Form.Item name="fw" initialValue={170}>
                <InputNumber
                  addonBefore={<div style={{ width: "100px" }}> FW </div>}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                  className="gray-left"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                label="NOTE"
                initialValue="Proses Perencanaan Perbaikan"
                name="note"
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Next Port"
                initialValue="Shipyard"
                name="next_port"
              >
                <Input size="large" />
              </Form.Item>
            </Col>
            <Col span={24} style={{ textAlign: "right" }}>
              <Space size={"large"}>
                <Button
                  type="primary"
                  onClick={() => form.submit()}
                  size="large"
                >
                  Export PDF{" "}
                  <InIcon
                    style={{
                      color: "#fff",
                    }}
                  />
                </Button>
                <Button
                  type="default"
                  onClick={() => form.submit()}
                  size="large"
                  style={{
                    background: "#E4E4E7",
                    color: "#40609e",
                  }}
                >
                  Export Excel{" "}
                  <InIcon
                    style={{
                      color: "#395998",
                    }}
                  />
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SubPageVesselActivity;
