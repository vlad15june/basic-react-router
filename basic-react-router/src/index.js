import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { createLogger } from 'redux-logger';

import App from './App'
import rootReducer from './reducers'
import { fetchPosts } from './actions/reddit';

const loggerMiddleware = createLogger();
const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
	  loggerMiddleware,
	  thunkMiddleware,
      routerMiddleware(history),
    ),
  ),
)

const state = store.getState();
const subreddit = state.reddit.selectedSubreddit.selectedSubreddit;
store.dispatch(fetchPosts(subreddit));

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer(history))
  })
}
