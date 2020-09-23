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
    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-AaptImXE5Y4%2FWzjvqBS8HtI%2FAAAAAAAAxSs%2FBcCIwpWJszILkuEbDfKZhxQJwOAD7qV6ACLcBGAs%2Fs728-e100%2Fthe-hacker-news.jpg&f=1&nofb=1' alt ='logo'/>
    <StoriesContainerWrapper data-test-id="stories-container">
     {storyIds.slice(0, count).map(storyId => (
        <Story storyId={storyId} key={storyId}/>
    ))}
    </StoriesContainerWrapper>
    </>
}

export default StoriesContainer