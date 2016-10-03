import React from 'react'
require('./05.styl')

class Loader05 extends React.Component {
  render() {
    const loaderDots = [0,0,0,0,0,0].map((num, index) => {
      return <div className="bar" key={index}></div>
    })
    return <div className="loader--05">
      {loaderDots}
    </div>
  }
}

export default Loader05
