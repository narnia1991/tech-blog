import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:blogId" element={<Blog />}></Route>
        </Routes>
      </PageLayout>
    </div>
  );
}

export default App;
