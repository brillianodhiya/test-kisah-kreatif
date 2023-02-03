import React from "react";

import { Layout, Menu, Button, Typography, Skeleton, Result } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";

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
import AvatarDropdown from "./components/RightMenu/AvatarDropdown";

import VesselActivity from "./pages/VesselActivity";
const SubPageVesselActivity = React.lazy(() =>
  import("./pages/SubPageVesselActivity")
);

const { Header, Content, Sider } = Layout;

const App = () => {
  const navigate = useNavigate();
  const [collapse, setCollapse] = React.useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        <Button type="text" onClick={() => setCollapse((v) => !v)}>
          <BurgerIcon />
        </Button>
        <Typography.Title
          style={{
            margin: 0,
          }}
          className="logo-text"
        >
          LOGIN'S
        </Typography.Title>
        <AvatarDropdown />
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
              onClick={() => navigate(-1)}
              icon={<BackIcon />}
              shape="circle"
              size="large"
              className="back-icon"
              style={{
                marginLeft: collapse ? "6px" : undefined,
              }}
            />
          </div>
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            background: "#fff",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route
                index
                element={<VesselActivity />}
                errorElement={<Result status={"500"} />}
              />
              <Route
                path="/sub"
                element={
                  <React.Suspense fallback={<Skeleton active />}>
                    <SubPageVesselActivity />
                  </React.Suspense>
                }
                errorElement={<Result status={"500"} />}
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
