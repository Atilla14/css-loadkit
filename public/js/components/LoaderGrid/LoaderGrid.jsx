import React from 'react'
import LoaderCell from '../LoaderCell/LoaderCell'

class LoaderGrid extends React.Component {
    render() {
      let loadersNum = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08'
      ]
      let loaders = loadersNum.map((num) => <LoaderCell value={num} key={parseInt(num)}/>)
      return <div className='loader-grid'>
        {loaders}
      </div>
    }
}

export default LoaderGrid
