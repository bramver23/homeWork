import React from 'react';
import {useState, useEffect} from 'react';
import { getStory, getStoryKids} from '../services/hnApi';
import  '../css/story.css';
export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});
    //console.log("-->", storyId);
    useEffect(() => {
       getStory(storyId).then(
           data => data &&  console.log(setStory(data))
           );
    //    getStory(commentId).then(
    //         data => data &&  setStory(data)
    //         );    

    }, []);

    return story && story.url ? (
        <div> 
            <div className="story"> 
                <p>{ story.title }</p>
                <ul ><span>Top Comments</span>
                    <li className="commentsStar"> { story.kids[0]} <br/> </li>
                    <li className="commentsStar"> { story.kids[1] } <br/> </li>
                    {/* <li>{story.comments.text}</li> */}
                </ul>
                <span className="by">by: {story.by}</span><br/>
                <span className="by">{story.url}</span>
            </div>
        </div>
    ): null ;
};
