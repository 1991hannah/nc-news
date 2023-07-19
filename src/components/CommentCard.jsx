import React from "react";

const CommentCard = (({comment}) => {
    return(
        <section className="comment-card">
            <ul className="comment-info">
                <li>{comment.body}</li>
                <li id="author">by {comment.author}</li>
                <li id="votes">Votes {comment.votes}</li>
            </ul>
        </section>
    )
})

export default CommentCard
