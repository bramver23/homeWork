import axios from 'axios';

export const baseUrl =`https://hacker-news.firebaseio.com/v0/`;
export const topStoriesId =`${baseUrl}topstories.json?`;
export const StoryItem = `${baseUrl}/item/`;

//https://hacker-news.firebaseio.com/v0/item/22212619.json

export const getStory = async(storyId) =>{
    const result = await axios.get(`${StoryItem + storyId}.json`)
    .then(res =>{
        var storyComments = res.data;
        console.log("Title of the Story -> ",(storyComments.title));
        storyComments.comments =[];
        storyComments.kids.slice(0,2).forEach(commentId => {
            axios.get(`${StoryItem + commentId}.json`)
            .then(res =>{
               var commentId = storyComments.comments.push(res.data);
                    for(var i=0; i< commentId; i++){
                    console.log("Comments of the Story -> ",storyComments.comments[i].text);
                }
            });
        });
        return storyComments;
    });
    console.log(result);
    return result;
};
export const getStoryIds = async() =>{
    const result = await axios.get(topStoriesId).then( ({data}) => data);
    return result;
};

