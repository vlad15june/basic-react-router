/*
	reddit components
*/
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as redditActions from '../../actions/reddit';
import Picker from './Picker';
import Posts from './Posts';

const Reddit = ({ selectedSubreddit, 
				  posts,
				  options, 
				  redditActions,
                  isFetching, 
				  lastUpdated				  
}) => {
	const handleRefreshClick = e => {
		e.preventDefault();
		redditActions.invalidateSubreddit(selectedSubreddit);
		redditActions.requestPosts(selectedSubreddit);
		redditActions.fetchPosts(selectedSubreddit);
	};
	return (
	<div>
		<Picker 
			selectedSubreddit={selectedSubreddit}
			options={options} 
			redditActions = {redditActions}
		/>
		<p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!isFetching && (
            <button onClick={e => handleRefreshClick(e)}>Refresh</button>
          )}
        </p>
		{isFetching && posts.length === 0 && <h2>Loading...</h2>}
        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
        {posts.length > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
	</div>
)};

Reddit.propTypes = {
	selectedSubreddit: PropTypes.string.isRequired,
	posts: PropTypes.array.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	redditActions: PropTypes.object.isRequired,
	isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number
};

const mapStateToProps = state => {
	const { selectedSubreddit, 
			options
	} = state.reddit.selectedSubreddit;
	
	const postsBySubreddit = state.reddit.postsBySubreddit;
	
	const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
		selectedSubreddit
	  ] || {
		isFetching: true,
		items: []
	};
	
	return {
		selectedSubreddit,
		options,
		posts,
		isFetching,
		lastUpdated
	};
};

const mapDispatchToProps = dispatch => ({
	redditActions: bindActionCreators(redditActions, dispatch)
});

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Reddit));
export default connect(mapStateToProps, mapDispatchToProps)(Reddit);
