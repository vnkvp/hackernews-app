import React, { useEffect, useState } from 'react'
import { getStory } from '../services/hnApi'
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/StoryStyle'
import { mapTime } from '../mappers/mapTime'

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data))
    })

    return story && story.url ? (
        <>
            <StoryWrapper>
                <StoryTitle><a href={story.url}>{story.title}</a></StoryTitle>
                <StoryMeta>
                    <span data-testid="story-by" >
                        <StoryMetaElement color="#333">by: </StoryMetaElement>{story.by}                    </span>
                    <span data-testid="story-time">
                        <StoryMetaElement color="#333">posted: </StoryMetaElement>{mapTime(story.time)}
                    </span>
                </StoryMeta>
            </StoryWrapper>
        </>
    ) : null
}