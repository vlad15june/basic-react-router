import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import counterReducer from './counter'
import redditReducer from './reddit'

const rootReducer = (history) => combineReducers({
  count: counterReducer,
  reddit: redditReducer,
  router: connectRouter(history)
})

export default rootReducer
