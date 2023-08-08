import { Card } from "antd";
import Markdown from "markdown-to-jsx";
import { FC, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Code from "../components/Code";

const Blog: FC = () => {
  const [mdContent, setMdContent] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  const fileName = location.pathname.split("/")[1];

  const fetchMd = useCallback(async () => {
    try {
      // @ts-ignore
      const link = await import(`../learnings/${fileName}.md`);
      // TODO: Decide if failing route should redirect to list page or to a 404 page
      if (!link) {
        throw new Error();
      }

      const content = await fetch(link.default);
      setMdContent(await content.text());
    } catch (err) {
      navigate("/");
      console.error(err);
    }
  }, [navigate, fileName]);

  useEffect(() => {
    fetchMd();
  }, [fetchMd]);

  return (
    <Card>
      <Markdown
        options={{
          overrides: {
            Code: {
              component: Code,
            },
            "*": {
              props: {
                style: { textAlign: "left" },
              },
            },
            h1: {
              props: {
                style: { textAlign: "center" },
              },
            },
          },
        }}
      >
        {mdContent}
      </Markdown>
    </Card>
  );
};

export default Blog;
