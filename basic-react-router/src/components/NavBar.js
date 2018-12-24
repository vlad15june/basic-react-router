import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav>
 
		<Link to="/">Home</Link> &nbsp;
		<Link to="/hello">Hello</Link> &nbsp;
		<Link to="/counter">Counter</Link> &nbsp;
		<Link to='/api'>API</Link> &nbsp;
		<Link to='/gql'>GQL</Link> &nbsp;
	
  </nav>
)

export default NavBar
