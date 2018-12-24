import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as counterActions from '../actions/counter';


const Counter = ({ count, counterActions }) => (
  <div>
    Counter: {count}
    <button onClick={counterActions.increment}>+</button>
    <button onClick={counterActions.decrement}>-</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number,
  counterActions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
	counterActions: bindActionCreators(counterActions, dispatch)
  
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Counter));
