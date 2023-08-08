import { List } from "antd";
import Card from "antd/es/card/Card";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const data = [
    {
      title: "Objects vs. Arrays",
      description: "Battle of the state types.",
      fileName: "objects-vs-arrays",
    },
    {
      title: "Do you even Reduce?",
      description: "My Favorite Array Method",
      fileName: "do-you-even-reduce",
    },
    {
      title: "Look at Me",
      description: 'Finally! My very own "Portfolio"',
      fileName: "look-at-me",
    },
    {
      title: "One Percent Better Everytime",
      description: "Collection of my acquired experience",
      fileName: "one-percent-better",
    },
  ];

  return (
    <Card>
      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{ textAlign: "left" }}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/tech-blog/${item.fileName}`} style={{ width: "100%" }}>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </Link>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Home;
