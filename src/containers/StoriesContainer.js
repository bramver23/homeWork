import React, {useEffect, useState} from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import { Story } from '../components/Story'
//import Posts from '../components/Posts';


export const  StoriesContainer = () =>{
  const[storyIds, setStoryIds ] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const[postsPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    getStoryIds().then(data => console.log(setStoryIds(data)));
   // getStory(22209985).then(data => console.log(data));
  },[]);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = storyIds.slice(indexOfFirstPost, indexOfLastPost);

  return currentPost.map((storyId , commentId) =>(
    <Story key={storyId} storyId={storyId} commentId={commentId}/>
  ));
}
    