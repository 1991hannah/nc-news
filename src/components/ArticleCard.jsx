import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = (({article}) => {
    return(
        <Link to={`/articles/${article.article_id}`}>
        <section className="article-card">
            <img className="article-image" src={article.article_img_url} />
            <ul className="article-info">
                <li>{article.title}</li>
                <li>by {article.author}</li>
                <li>likes {article.votes}</li>
            </ul>
        </section>
        </Link>
    )
})

export default ArticleCard
