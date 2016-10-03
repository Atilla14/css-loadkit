import React from 'react'
require('./12.styl')

class Loader12 extends React.Component {
  render() {
    const loaderDots = [0,0,0,0].map((num, index) => {
      return <div className="cell" key={index}></div>
    })
    return <div className="loader--12">
      {loaderDots}
    </div>
  }
}

export default Loader12
