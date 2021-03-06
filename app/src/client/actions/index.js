import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY || '';

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = source => dispatch => {
  let url;
  console.log(API_KEY)
  if (source) {
    url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  }
  axios
    .get(url)
    .then(res =>
      dispatch({
        type: FETCH_ARTICLES,
        payload: res.data.articles
      })
    )
    .catch(e => console.log(`Error occurs when getting ${url}: ${e}`));
};
