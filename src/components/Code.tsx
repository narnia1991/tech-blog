import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code: FC<{ children: string; language: string }> = ({
  children,
  language,
}) => {
  return (
    <div className="">
      <SyntaxHighlighter language={language} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
