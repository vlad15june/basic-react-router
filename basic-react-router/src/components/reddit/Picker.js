/*
	Picker.js
*/

import React from 'react';
import PropTypes from 'prop-types'

const Picker = ({ selectedSubreddit, options, redditActions }) => {
	
	const { selectSubreddit, invalidateSubreddit, requestPosts, fetchPosts } = redditActions;
	
	const handleChange = subreddit => {
		selectSubreddit(subreddit);	
		invalidateSubreddit(subreddit);
		requestPosts(subreddit);
		fetchPosts(subreddit);
	};
	
	return(
	<span>
		<h1>{selectedSubreddit}</h1>
		<select onChange={e => handleChange(e.target.value)}
			value={selectedSubreddit}>
			{options.map(option =>
				<option value={option} key={option}>
					{option}
				</option>
			)}
		</select>
	</span>);
};

Picker.propTypes = {
	selectedSubreddit: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	redditActions: PropTypes.object.isRequired
};

export default Picker;





