import React from "react";
import { useState, useEffect } from 'react'
import { getArticleById, getCommentsByArticle } from "./api"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"

const IndividualArticle = () => {
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [userVotes, setUserVotes] = useState(0);
    const { article_id } = useParams();

    const increaseVote = () => {
        setUserVotes(1)
    }

    const reduceVote = () => {
        setUserVotes(-1)
    }

    useEffect(() => {
        const promise1 = getArticleById(article_id)
        const promise2 = getCommentsByArticle(article_id)
        Promise.all([promise1, promise2])
        .then(([articleData, commentData]) => {
            setArticle(articleData);
            setComments(commentData);
            setLoading(false)
        })
    }, [article_id])

    const articleCard = ((article) => {
        return (
            <section>
            <h2 className="articleHeader">{article.title}</h2>
            <img className="individual-article-image" src={article.article_img_url} />
            <h3 className="articleAuthor">By {article.author}</h3>
            <p>{article.created_at}</p>
            <p>Topic: {article.topic}</p>
            <p className="article-body">{article.body}</p>
            <p className="voteCounter">Votes: {article.votes + userVotes} </p>
            <button aria-label="Like this comment" onClick={increaseVote}>
                👍🏻
            </button>
            <button aria-label="Dislike this comment" onClick={reduceVote}>
                👎🏻
            </button>
            </section>
        )
    })

    if (loading) {
        return (
            <h2>Article loading...</h2>
        )
    } else if (comments.length !== 0) {
        return (
            <main className="individual-article">
                {articleCard(article)}
                <section className="comment-container">
                <h3 className="comments-header">Comments</h3>
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id} />
                })}
                </section>
            </main>
        )
    } else if (comments.length === 0) {
        return (
            <main className="individual-article">
                {articleCard(article)}
                <section className="comment-container">
                <h3 className="comments-header">Comments</h3>
                <h2>No comments</h2>
                </section>
            </main>
        )
    }
}

export default IndividualArticle