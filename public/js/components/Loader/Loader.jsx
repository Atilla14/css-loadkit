import React from 'react'
require ('./loader.styl')

export default class Loader extends React.Component {
  render() {
    let loaderRef = './Loaders/' + this.props.value + '/' + this.props.value
    let ChosenLoader = require(loaderRef).default
    return <ChosenLoader />
  }
}
