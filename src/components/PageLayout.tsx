import { Button, Card, Image, Layout } from "antd";
import { FC, ReactNode, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import BackButton from "./BackButton";

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { Header, Content, Footer } = Layout;

  const location = useLocation();

  const navigate = useNavigate();

  const handleHomeClick = useCallback(() => {
    return navigate("/");
  }, [navigate]);

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!!location.pathname.split("/")[2] ? <BackButton /> : <div></div>}
        <Button
          style={{ backgroundColor: "transparent", border: 0 }}
          onClick={handleHomeClick}
        >
          <Image
            alt="home"
            src={"/tech-blog/Narnia Icon.png"}
            height="1.5rem"
            preview={false}
          ></Image>
        </Button>
      </Header>
      <Card style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", color: "orange" }}>⚠</div>
        <div>
          This is still a work in progress. The articles are still just hard
          coded and not being fetched from an API. I will work on creating a
          service to do that.
        </div>
      </Card>
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
