import React from 'react'
require('./06.styl')

class Loader06 extends React.Component {
  render() {
    const loaderDots = [0,0,0,0,0,0,0,0,0].map((num, index) => {
      return <div className="cell" key={index}></div>
    })
    return <div className="loader--06">
      {loaderDots}
    </div>
  }
}

export default Loader06
