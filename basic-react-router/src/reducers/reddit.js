/*
	reddit reducers
*/

import { combineReducers } from 'redux';
import {
	SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, 
	REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/reddit';

const initialState = {
	selectedSubreddit : 'elm',
	options: ['elm', 'reactjs', 'frontend']
};

const selectedSubreddit = (state = initialState, action)  => {
	switch( action.type ){
		case SELECT_SUBREDDIT:
			return ({...state, 
				selectedSubreddit: action.subreddit
			});
		default: 
			return state;
	};
};

const posts = (state = {
	isFetching: false,
	didInvalidate: false,
	items: []
}, action) => {

	switch( action.type ){
		case INVALIDATE_SUBREDDIT:
			return ({...state, 
				didInvalidate: true
			});
		case REQUEST_POSTS:
			console.log('REQUEST_POSTS');
			return ({ ...state, 
				isFetching: true,
				didInvalidate: false
			});
		case RECEIVE_POSTS:
			return ({ ...state, 
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			});
		default: 
			return state;
	};
};

const postsBySubreddit = (state = {}, action) => {
	switch(action.type){
		case INVALIDATE_SUBREDDIT:
		case REQUEST_POSTS:
		case RECEIVE_POSTS:
			return ({ ...state, 
				[action.subreddit]: posts(state[action.subreddit], action)
			});
		default: 
			return state;
	};
};

const redditReducer = combineReducers({
	selectedSubreddit,
	postsBySubreddit
});

export default redditReducer;
