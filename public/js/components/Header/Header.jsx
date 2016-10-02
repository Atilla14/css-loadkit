import React from 'react'
require('./header.styl')

class Header extends React.Component {
  render() {
    return <div className='header'>
      <h1 className='header-text'>css-loadkit</h1>
      <p className='subheader-text'>A small collection of fun css loaders.</p>
    </div>
  }
}

export default Header
