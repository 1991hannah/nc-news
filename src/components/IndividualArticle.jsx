import React from "react";
import { useState, useEffect } from 'react'
import { getArticleById, getCommentsByArticle } from "./api"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"

const IndividualArticle = () => {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const { article_id } = useParams();

    useEffect(() => {
        getArticleById(article_id)
        .then((articleData) => {
            setArticle(articleData);
            setLoading(false);
        getCommentsByArticle(article_id)
        .then((commentData) => {
            setComments(commentData);
        })
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
        <section className="comment-container">
            <h3 className="comments-header">Comments</h3>
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id} />
            })}
        </section>
        </main>
    )
    }
}

export default IndividualArticle