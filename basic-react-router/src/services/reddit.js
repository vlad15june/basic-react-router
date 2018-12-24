
//import fetch from 'isomorphic-fetch';
import fetch from 'cross-fetch';

export const getPosts = subreddit => 
	fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
	  .catch( err => console.log('Error: ' + err));

