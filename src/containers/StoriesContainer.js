import React, { useEffect, useState } from 'react'
import { getStorysId } from '../services/hnApi'
import { Story } from '../components/Story'

const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([])

    useEffect(() => {
        getStorysId().then(data => setStoryIds(data))
    }, [])

    return <>
    <h1>HACKERNEWS</h1>
     {storyIds.map(storyId => (
        <Story storyId={storyId} key={storyId}/>
    ))}
    </>
}

export default StoriesContainer