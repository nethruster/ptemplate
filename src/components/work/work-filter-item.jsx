import React from 'react'

var Ink = require('react-ink')

export default class WorkFilterItem extends React.PureComponent {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.props.handleFilterChange(this.props.name, !this.props.value)
  }

  render () {
    return (
      <li className='md__checkbox' title={`${this.props.name} projects`}>
        <label className='flex flex-cross-center pointer'>
          <input type='checkbox' onChange={this.handleChange} checked={this.props.value} />
          <span className='md__checkbox-material'><span className='md__checkbox-check' /></span>
          <span className='md__checkbox-material__text'>{this.props.name}</span>
          <Ink />
        </label>
      </li>
    )
  }
}
