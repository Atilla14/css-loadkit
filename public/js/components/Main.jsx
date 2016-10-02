import React from 'react'
import LoaderGrid from './LoaderGrid/LoaderGrid'
import Header from './Header/Header'
require('./main.styl')

class Main extends React.Component {
  render() {
    return <div id='main-container' className='contianer'>
      <Header />
      <LoaderGrid />
    </div>
  }
}

export default Main
