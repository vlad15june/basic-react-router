/*
	Posts.js
*/

import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({posts}) => (
	<ul>
		{posts.map(
			(post) => 
			<li key={post.id}> 
				<a href={post.url} target="_blank">{post.title} </a>
			</li>
		)}
	</ul>
);

Posts.propTypes = {
	posts: PropTypes.array.isRequired
};

export default Posts;



