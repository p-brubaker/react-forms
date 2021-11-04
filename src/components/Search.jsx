import React from 'react';

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
            <button type="submit">Submit</button>
        </form>
    );
}
