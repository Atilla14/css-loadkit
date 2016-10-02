import React from 'react'
require('./04.styl')

class Loader04 extends React.Component {
  render() {
    const loaderDots = [0,0,0,0].map((num, index) => {
      return <div className="dot" key={index}></div>
    })
    return <div className="loader--04">
      {loaderDots}
    </div>
  }
}

export default Loader04
