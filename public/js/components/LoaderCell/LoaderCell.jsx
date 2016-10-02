import React from 'react'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'

class LoaderCell extends React.Component {
  render() {
    return <Loader value={this.props.value}/>
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderCell)
