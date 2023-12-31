import React from "react";
import { useEffect } from 'react'
import { getArticles } from "./api"
import { useState } from "react";
import ArticleCard from "./ArticleCard"
import { Link } from "react-router-dom";

const Articles = (() => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        getArticles().then((response) => {
            return response
        })
        .then((response)=> {
            setArticles(response)
        }) 
    })

    return(
        <section id="articles">
        <h3>Sort by: </h3>
        <button>Date</button>
        <button></button>
        <article className="card-container">
            {articles.map((article)=> {
                return <ArticleCard article={article} key={article.article_id} />
            } )}
        </article>
        </section>
    )
})

export default Articles