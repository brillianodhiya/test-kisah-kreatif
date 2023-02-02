import React from "react";

import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import BurgerIcon from "./components/Icon/BurgerIcon";
import DasboardIcon from "./components/Icon/DashboardIcon";
import CalendarIcon from "./components/Icon/CalendarIcon";
import BoxShipIcon from "./components/Icon/BoxShipIcon";
import GlobeIcon from "./components/Icon/GlobeIcon";
import UsersAltIcon from "./components/Icon/UsersAltIcon";
import SettingsIcon from "./components/Icon/SettingsIcon";
import UsersIcon from "./components/Icon/UsersIcon";
import CardSky from "./components/Card/CardSky";
import BackIcon from "./components/Icon/BackIcon";

const { Header, Content, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapse, setCollapse] = React.useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <Button type="text" onClick={() => setCollapse((v) => !v)}>
          <BurgerIcon />
        </Button>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          width={340}
          className="site-layout-background"
          collapsed={collapse}
          onCollapse={(col) => setCollapse(col)}
          collapsedWidth={70}
        >
          <Menu
            mode="inline"
            className="menu-items"
            defaultSelectedKeys={["vessel-activity"]}
            selectable={false}
            style={{
              // height: "99%",
              borderRight: 0,
            }}
            items={[
              {
                key: "dashboard",
                icon: <DasboardIcon />,
                label: "Dashobard",
              },
              {
                key: "schedule",
                icon: <CalendarIcon />,
                label: "Schedule",
              },
              {
                key: "vessel-activity",
                icon: <GlobeIcon />,
                label: "Vessel Activity",
              },
              {
                key: "vessel",
                icon: <BoxShipIcon />,
                label: "Vessel",
              },
              {
                key: "crewlist",
                icon: <UsersAltIcon />,
                label: "Crewlist",
              },
              {
                key: "maintenance",
                icon: <SettingsIcon />,
                label: "Maintenance",
              },
              {
                key: "user",
                icon: <UsersIcon />,
                label: "User",
              },
            ]}
          />

          {!collapse && <CardSky />}

          <div className="footer-nav">
            <Button
              icon={<BackIcon />}
              shape="circle"
              size="large"
              className="back-icon"
            />
          </div>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            background: "#fff",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
