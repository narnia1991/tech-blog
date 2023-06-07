import Icon from "@ant-design/icons/lib/components/Icon";
import { Button } from "antd";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router";

const BackButton: FC = () => {
  const navigate = useNavigate();
  const handleBackClick = useCallback(() => navigate(-1), [navigate]);

  return (
    <Button onClick={handleBackClick}>
      <Icon viewBox="0 0 1024 1024">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </Icon>
    </Button>
  );
};
export default BackButton;
