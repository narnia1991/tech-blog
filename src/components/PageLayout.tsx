import { Layout } from "antd";
import { FC, ReactNode } from "react";
import { useLocation } from "react-router";
import BackButton from "./BackButton";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { Header, Content, Footer } = Layout;

  const location = useLocation();

  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        {!!location.pathname.split("/")[2] && <BackButton />}
      </Header>
      <Content
        style={{
          padding: "2rem",
          width: "70%",
          height: "100%",
          margin: "0 auto",
        }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: "center" }}>©2023 narnia1991</Footer>
    </Layout>
  );
};

export default PageLayout;
