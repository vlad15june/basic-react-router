/*
	github components
*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as githubActions from '../../actions/github';

const Github = ({ path, organization, errors }) => (
	<div>
		<h1>Github</h1>
		
		<form>
	        <label htmlFor="url">
				Show open issues for https://github.com/
			</label>
			<input
				id="url"
				type="text"
				value={path}
				onChange={e => console.log(e.target.value)}
				style={{ width: '300px' }}
			/>
			<button type="submit">Search</button>		
		</form>
		<hr />
		{organization}
		{errors}
	</div>
);

const mapDispatchToProps = dispatch => ({
	redditActions: bindActionCreators(githubActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Github);
