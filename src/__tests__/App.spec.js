import React from 'react'
import { act } from 'react-dom/test-utils'
import { render, cleanup, waitForElement } from '@testing-library/react'
import { App } from '../App'
import { storyIds, singularStory } from '../fixtures'
import { getStory, getStorysId } from '../services/hnApi'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { STORY_INCREMENT } from '../constants'
import StoriesContainer from '../containers/StoriesContainer'

beforeEach(cleanup)

jest.enableAutomock()

test('renders the app', async () => {
    useInfiniteScroll.mockImplementation(() => {
        count: STORY_INCREMENT
    })
    getStory.mockImplementation(() => Promise.resolve(singularStory))
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds))

    await act(async () => {

        const { getByText, queryByTestId } = render(<App />)

        await waitForElement(() => [
            expect(getByText(container, 'HACKERNEWS').toBeTruthy(),
                expect(getByText(container, 'xxxxxxxx').toBeTruthy(),
                    expect(queryByTestId(container, 'story-by').toEqual('vnkvp')),
        ], { container })
    })
})