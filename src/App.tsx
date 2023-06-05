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
        gist.githubusercontent(dot)com/candraKriswinarto/38e52a600edf73f3b5626acc5c07403e/raw/22e826e308cf429b8c76b93fcbc5e56e007d0e82/article.md
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
