const URL = 'https://newsapi.org/v2/everything';

export async function fetchNewsArticles(query) {
    const url = query ? `${URL}q?=${query}` : URL;
    const res = await fetch(url);
    const articles = await res.json();
    console.log('articles: ', articles);
    return articles;
}
