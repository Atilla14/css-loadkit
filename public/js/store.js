import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'

export default createStore(reducer,  compose(
    applyMiddleware(),
    // For Chrome dev tools redux-plugin
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
