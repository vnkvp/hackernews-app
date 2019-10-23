import React, { useEffect, useState } from 'react'
import { getStorysId } from '../services/hnApi'
import { Story } from '../components/Story'
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'

const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([])
    const { count } = useInfiniteScroll()

    useEffect(() => {
        getStorysId().then(data => setStoryIds(data))
    }, [])

    return <>
    <GlobalStyle />
    <h1>HACKERNEWS</h1>
    <StoriesContainerWrapper data-test-id="stories-container">
     {storyIds.slice(0, count).map(storyId => (
        <Story storyId={storyId} key={storyId}/>
    ))}
    </StoriesContainerWrapper>
    </>
}

export default StoriesContainer