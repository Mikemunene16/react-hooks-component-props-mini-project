import React from "react";
import Article from "./Article";

function ArticleList ({articles}) {

    const articleElements = articles.map((articleObj) => {
        return (
            <Article key = {articleObj.id} title = {articleObj.title} date = {articleObj.date} preview = {articleObj.preview} minutes = {articleObj.minutes}/>
        )
        
    })

    // const displayArticle = articles.forEach(article => {
    //     return (
    //         <Article title = {article.title}/>
    //     )
    // });

    return (
        <main>

            {articleElements}

        </main>
        
        
    )
}

export default ArticleList;