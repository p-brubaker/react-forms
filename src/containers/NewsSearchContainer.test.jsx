import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NewsSearchContainer from './NewsSearchContainer';

describe('Shows news articles', () => {
    it('should display a list of news articles', async () => {
        render(<NewsSearchContainer />);
        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'articles' });
        expect(ul).toMatchSnapshot();

        const queryInput = await screen.findByLabelText('Search by topic');
        userEvent.type(queryInput, 'JavaScript');

        const submitButton = await screen.findByRole('button', {
            name: 'Submit',
        });

        userEvent.click(submitButton);

        return waitFor(() => {
            const articles = screen.getAllByText('JavaScript', {
                exact: false,
            });

            expect(articles).toHaveLength(10);
        });
    });
});
