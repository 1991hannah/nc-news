import React from "react";
import { useState, useEffect } from 'react'
import { getArticleById } from "./api"
import { useParams } from "react-router-dom"

const IndividualArticle = () => {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const { article_id } = useParams();

    useEffect(() => {
        getArticleById(article_id).then((articleData) => {
            setArticle(articleData);
            setLoading(false);
        }); 
    }, [article_id]);

    if (loading) {
        return (
            <h2>Article loading...</h2>
        )
    } else {

    return (
        <main className="individual-article">
        <h1 className="articleHeader">{article.title}</h1>
        <h2 className="articleAuthor">by {article.author}</h2>
        <p>{article.created_at}</p>
        <p>Topic: {article.topic}</p>
        <img className="individual-article-image" src={article.article_img_url} />
        <p>{article.body}</p>
        <p className="voteCounter"> Votes: {article.votes}</p>
        </main>
    )
    }
}

export default IndividualArticle