import React from 'react'
import { connect } from 'react-redux'
import { updateTest } from '../../actions/test.actions.js'

class LoaderDisplay extends React.Component {
  handleKeyUp(ev) {
    this.props.update(ev.target.value)
  }

  render() {
    return <div>
      <input onKeyUp={this.handleKeyUp.bind(this)}></input>
      <h5>{this.props.test}</h5>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.test.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (text) => {
      dispatch(updateTest(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoaderDisplay)
