import React from "react";
import { addComment, getCommentsByArticle } from './api'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const AddComment = () => {
    const [error, setError] = useState(null)
    const [newComment, setNewComment] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [disabled, setDisabled] = useState(false);
    const { article_id } = useParams();
    const [userMessage, setUserMessage] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setDisabled(true)
        const commentObj = {
        "username" : newUsername,
        "body" : newComment
        }
        addComment(article_id, commentObj)
        .then(() => {
            setNewUsername("")
            setNewComment("")
            setDisabled(false)
            setUserMessage("Your comment has been posted!")
        })
        .catch(({error}) => {
            setDisabled(false)
            setError(true)
            setUserMessage("Sorry something went wrong, please try again")
        })
    }

    return (
        <form className="new-comment-form" onSubmit={handleSubmit}>
            <p></p>
            <label>Enter your comment:</label>
                <textarea 
                type="text"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}/>
            <label />
            Username:
                <input
                type="text"
                value={newUsername}
                onChange={e => setNewUsername(e.target.value)}/>
            <button disabled={disabled} type="submit" className="submit-button">Submit</button>
            <p>{userMessage}</p>
        </form>
    )

}

export default AddComment