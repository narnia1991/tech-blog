import { Card } from "antd";
import Markdown from "markdown-to-jsx";
import { FC, useCallback, useEffect, useState } from "react";
import Code from "../components/Code";

const Blog: FC = () => {
  const [mdContent, setMdContent] = useState<string>("");

  const fetchMd = useCallback(async () => {
    try {
      // @ts-ignore
      const link = await import("../sample.md");
      const content = await fetch(link.default);
      setMdContent(await content.text());
    } catch (err) {
      console.error(err);
    }
  }, []);

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
              props: {
                language: "javascript",
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
