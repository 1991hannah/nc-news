import React from "react";

const CommentCard = (({comment}) => {
    return(
        <section className="comment-card">
                <p>{comment.body}</p>
                <p id="author">by {comment.author}</p>
                <p id="votes">Votes {comment.votes}</p>
        </section>
    )
})

export default CommentCard
