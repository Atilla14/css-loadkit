import React from 'react'
import { connect } from 'react-redux'
import Loader from '../Loader/Loader'
require('./loaderCell.styl')

class LoaderCell extends React.Component {
  render() {
    return <div className='loader-container'>
      <Loader value={this.props.value}/>
      <div className='loader-mask'>
        <button className='loader-code'><i className='icon-code'></i></button>
      </div>
    </div>
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
