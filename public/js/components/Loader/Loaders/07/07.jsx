import React from 'react'
require('./07.styl')

class Loader07 extends React.Component {
  render() {
    const loaderDots = [0,0,0,0,0].map((num, index) => {
      return <div className='dot-container' key={index}>
        <div className='dot'></div>
      </div>
    })
    return <div className='loader--07'>
      {loaderDots}
    </div>
  }
}

export default Loader07
