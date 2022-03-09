import ArticleList from "./components/articleList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/articles" element={<ArticleList />}></Route>
          <Route path="/articles/:topic" element={<ArticleList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
