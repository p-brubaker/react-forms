import React from 'react';
import PropTypes from 'prop-types';

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

Article.propTypes = {
    article: PropTypes.objectOf(String, String, String),
};
