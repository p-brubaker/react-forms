const key = process.env.REACT_APP_API_KEY;
const domain = 'hackaday.com';
// eslint-disable-next-line max-len
const URL = `https://newsapi.org/v2/everything?domains=${domain}&apiKey=${key}`;

export async function fetchNewsArticles(query) {
    const url = query ? `${URL}&q?=${query}` : URL;
    const res = await fetch(url);
    const articles = await res.json();
    return articles;
}
