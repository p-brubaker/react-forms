import React from 'react';
import PropTypes from 'prop-types';

export function Search(props) {
    const { handleSubmit, handleChange, query } = props;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search by topic</label>
            <input
                id="search"
                name="search"
                value={query}
                onChange={handleChange}
            />
            <button type="submit" aria-label="submit">
                Submit
            </button>
        </form>
    );
}

Search.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    query: PropTypes.string,
};
