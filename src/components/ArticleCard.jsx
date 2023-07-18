import React from "react";

const ArticleCard = (({article}) => {
    return(
        <section className="article-card">
            <div className="article-image">
                <img className="article-image" src={article.article_img_url} />
            </div>
            <ul className="article-info">
                <li>{article.title}</li>
                <li>by {article.author}</li>
                <li>likes {article.votes}</li>
            </ul>
        </section>
        
    )
})

export default ArticleCard
