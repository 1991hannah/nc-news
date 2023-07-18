import axios from 'axios'

export const getArticles = () => {
    return axios.get('https://nc-news-nt0m.onrender.com/api/articles')
    .then((response) => {
        return response.data.articles
    })
}

