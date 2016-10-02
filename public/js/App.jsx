import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store'
import Main from './components/Main'

class App extends React.Component {
  render() {
    return <Provider store={Store}>
      <Main />
    </Provider>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
