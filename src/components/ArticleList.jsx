import React from 'react';
import { Article } from './Article';

export function ArticleList({ articles }) {
    return (
        <ul aria-label="articles">
            {articles.map((article) => {
                return <Article article={article} key={article.description} />;
            })}
        </ul>
    );
}
