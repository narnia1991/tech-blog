import { Layout } from "antd";
import { FC, ReactNode } from "react";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}></Header>
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
