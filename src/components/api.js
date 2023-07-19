import axios from 'axios'

export const getArticles = () => {
    return axios.get('https://nc-news-nt0m.onrender.com/api/articles')
    .then((response) => {
        return response.data.articles
    })
}

export const getArticleById = (article_id) => {
    return axios.get(`https://nc-news-nt0m.onrender.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    })
}

export const getCommentsByArticle = (article_id) => {
    return axios.get(`https://nc-news-nt0m.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments;
    })
}