import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {

  return (

    <div className="App">

      <Header title = {blogData.name}/>
      <About img = {blogData.image} description = {blogData.about}/>
      <ArticleList articles={blogData.posts}/>

    </div>
  );
}

export default App;
