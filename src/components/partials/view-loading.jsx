import React from 'react'

export default class ViewLoading extends React.Component {
  render () {
    return (
      <div className='view-loading'>
        <div className='spinner'>
          <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'>
            <circle fill='none' cx='15' cy='15' r='14' />
          </svg>
        </div>
      </div>
    )
  }
}
