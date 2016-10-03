import React from 'react'
import LoaderCell from '../LoaderCell/LoaderCell'
import LoadersConf from '../Loader/loaders'

class LoaderGrid extends React.Component {
    render() {
      let loaders = LoadersConf.map((loader) => <LoaderCell value={loader.id} key={parseInt(loader.id)} url={loader.url}/>)
      return <div className='loader-grid'>
        {loaders}
      </div>
    }
}

export default LoaderGrid
