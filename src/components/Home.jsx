import { Route, Routes } from "react-router-dom"
import React from "react";
import LatestArticles from "./LatestArticles"
import PopularArticles from "./PopularArticles"

const Home = (() => {
    return(
        <main className="home">
        <h2>Welcome to NC News!</h2>
        <LatestArticles />
        <PopularArticles />
        </main>
    )
})

export default Home