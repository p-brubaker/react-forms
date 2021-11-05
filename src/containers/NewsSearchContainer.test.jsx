import {
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import NewsSearchContainer from './NewsSearchContainer';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import mockDefaultGetResults from './__mocks__/mockDefaultGetResults.json';
import mockGetWithQuery from './__mocks__/mockGetWithQuery.json';
const URL = 'https://newsapi.org/v2/everything';

describe('Shows news articles', () => {
    const server = setupServer(
        rest.get(URL, (req, res, ctx) => {
            const query = req.url.searchParams;
            const q = query.get('q');

            if (q === ' JavaScript') {
                return res(ctx.status(200), ctx.json(mockGetWithQuery));
            } else {
                return res(ctx.status(200), ctx.json(mockDefaultGetResults));
            }
        })
    );

    beforeAll(() => {
        server.listen({ onUnhandledRequest: 'warn' });
    });

    afterEach(() => server.resetHandlers);

    afterAll(() => {
        server.close();
    });

    it('should display a list of articles from hackaday.com', async () => {
        render(<NewsSearchContainer />);
        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'articles' });
        expect(ul).toMatchSnapshot();
    });

    it('should display a list of articles mentioning JavaScript', async () => {
        render(<NewsSearchContainer />);
        screen.getByText('Loading...');

        const queryInput = await screen.findByLabelText('Search by topic');
        userEvent.type(queryInput, 'JavaScript');

        const submitButton = await screen.findByRole('button', {
            name: 'submit',
        });

        userEvent.click(submitButton);

        await waitForElementToBeRemoved(screen.getByText('Loading...'));

        return waitFor(() => {
            const articles = screen.getAllByText('JavaScript', {
                exact: false,
            });

            expect(articles).toHaveLength(1);
        });
    });
});
