import React from 'react'
require('./10.styl')

class Loader10 extends React.Component {
  render() {
    const loaderDots = [0,0,0].map((num, index) => {
      return <div className="dot" key={index}></div>
    })
    return <div className="loader--10">
      {loaderDots}
    </div>
  }
}

export default Loader10
