import React from "react";
import { useState, useEffect } from 'react'
import { getArticleById, getCommentsByArticle, updateArticleVotes } from "./api"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"

const IndividualArticle = () => {
    const [error, setError] = useState(null)
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [userVotes, setUserVotes] = useState(0);
    const [buttonClick, setButtonClick] = useState(false);
    const { article_id } = useParams();
    const [disabled, setDisabled] = useState(false);

    function increaseVote(e) {
        e.preventDefault()
        const updateVotesBy = { inc_votes: 1 }
        setUserVotes(1)
        setDisabled(true)
        updateArticleVotes(article_id, updateVotesBy)
        .catch(({error}) => {
        setUserVotes(0)
        setError(true)
        })
    }

    function reduceVote(e) {
        e.preventDefault()
        const updateVotesBy = { inc_votes: -1 }
        setUserVotes(-1)
        updateArticleVotes(article_id, updateVotesBy)
        setDisabled(true)
        .catch(({error}) => {
            setUserVotes(0)
            setError(true)
    })
}


    if (error) {
        return (
            {error} && <p>Whoops! Something went wrong, please try again</p>
        )
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
            <button class="button" aria-label="Like this comment" onClick={increaseVote}>
                👍🏻
            </button>
            <button class="button" aria-label="Dislike this comment" onClick={reduceVote}>
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