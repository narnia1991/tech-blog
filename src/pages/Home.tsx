import { List } from "antd";
import Card from "antd/es/card/Card";
import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const data = [
    {
      title: "Item 1",
      description: "This is supposed to be a very long post",
      id: 1,
    },
    {
      title: "Item 2",
      description: "This is supposed to be a very long post",
      id: 2,
    },
    {
      title: "Item 3",
      id: 3,
      description: "This is supposed to be a very long post",
    },
    {
      title: "Item 4",
      id: 4,
      description: "This is supposed to be a very long post",
    },
    {
      title: "Item 5",
      description: "This is supposed to be a very long post",
      id: 5,
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
            <Link to={`/tech-blog/${item.id}`} style={{ width: "100%" }}>
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
