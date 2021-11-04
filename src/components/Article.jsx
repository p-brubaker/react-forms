import React from 'react';

export function Article(props) {
    const { author, title, description } = props.article;
    return (
        <li>
            <p>Author: {author}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
        </li>
    );
}
