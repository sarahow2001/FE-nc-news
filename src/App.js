import ButtonAppBar from "./app.bar";
import ArticleList from "./components/articleList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav";
import SingleArticle from "./components/singleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <NavBar />
        <Routes>
          <Route path="/articles" element={<ArticleList />}></Route>
          <Route path="/articles/:topic" element={<ArticleList />}></Route>
          <Route
            path="/articles/article/:id"
            element={<SingleArticle />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
