import React, { Component } from 'react';
import { fetchNewsArticles } from '../services/newsAPI';
import { Search } from './Search';
import { ArticleList } from './ArticleList';

class NewsSearch extends Component {
    state = {
        query: '',
        loading: true,
        articles: [],
    };

    async componentDidMount() {
        const result = await fetchNewsArticles();
        const articles = await result.articles;
        this.setState({ articles, loading: false });
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const result = await fetchNewsArticles(this.state.query);
        const articles = await result.articles;
        this.setState({ articles, loading: false });
    };

    render() {
        const { articles, loading, query } = this.state;

        if (loading) return <h1>Loading...</h1>;

        if (!loading)
            return (
                <>
                    <Search
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        query={query}
                    />
                    <ArticleList articles={articles} />
                </>
            );
    }
}

export default NewsSearch;
