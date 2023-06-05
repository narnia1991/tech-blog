import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: "left", padding: "1rem" }}>
        <div style={{ fontSize: "4rem", color: "orange" }}>⚠</div>
        <br />
        This is a work in progress.
        <br />
        Following the video from youtube(dot)com/watch?v=Od-Uj5RSsuM
        <br />
        I got the sample markdown from
        <br />{" "}
        githubusercontent(dot)com/rt2zz/e0a1d6ab2682d2c47746950b84c0b6ee/raw/83b8b4814c3417111b9b9bef86a552608506603e/markdown-sample.md
        <br />
        <br />
        ToDo: <br />
        Fix styles <br />
        Add syntax highlighter <br />
        Add Copy Paste
        <br />
      </div>
      <PageLayout>
        <Routes>
          <Route path="/tech-blog" element={<Home />}></Route>
          <Route path="/tech-blog/:blogId" element={<Blog />}></Route>
        </Routes>
      </PageLayout>
    </div>
  );
}

export default App;
