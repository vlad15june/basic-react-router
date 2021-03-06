/*
	reddit actions
*/

import { getPosts } from '../services/reddit';

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectSubreddit = subreddit => {
	return {
	type: SELECT_SUBREDDIT,
	subreddit
}};

export const invalidateSubreddit = subreddit => ({
	type: INVALIDATE_SUBREDDIT,
	subreddit
});

export const requestPosts = subreddit => ({
	type: REQUEST_POSTS,
	subreddit
});

export const receivePosts = (subreddit, json) => ({
	type: RECEIVE_POSTS,
	subreddit,
	posts: json.data.children.map( child => child.data ),
	receivedAt: Date.now()
	
});

export const fetchPosts = subreddit => dispatch => {
    dispatch(requestPosts(subreddit));
    return getPosts(subreddit)
	  .then(json => dispatch(receivePosts(subreddit, json)));
};





