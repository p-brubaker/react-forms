import React, { Component } from 'react';

class NewsSearch extends Component {
    state = {
        search: '',
        loading: true,
        articles: [],
    };

    render() {
        return <h1>Hello from the newssearch component</h1>;
    }
}

export default NewsSearch;
