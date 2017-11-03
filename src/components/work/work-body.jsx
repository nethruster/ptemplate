import React from 'react'

import WorkFilters from './work-filters.jsx'
import WorkItem from './work-item.jsx'

import Icon from '../partials/icon.jsx'

import { projects } from '../../config.js'

import lang from 'lang'
const langContext = lang.work

export default class WorkBody extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      filters: this.generateFilters(),
      projects: projects
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleAllFilterChange = this.handleAllFilterChange.bind(this)
    this.getFilteredWorkItems = this.getFilteredWorkItems.bind(this)
  }

  generateFilters () {
    let filters = {}

    projects.forEach((project) => {
      project.categories.forEach((category) => {
        if (!Object.keys(filters).includes(category)) {
          filters[category] = true
        }
      })
    })

    return filters
  }

  getFilteredWorkItems () {
    if (this.state.projects.length) {
      return this.state.projects.map((project, i) => {
        let match = false

        project.categories.forEach((category) => {
          if (this.state.filters[category]) {
            match = true
          }
        })

        if (match) {
          return <WorkItem key={i} work={project} />
        }
      })
    } else {
      return (
        <p className='no-projects-text flex flex-dc flex-cross-center'>
          <Icon iconName='person' />
          {langContext.no_projects}
        </p>
      )
    }
  }

  handleFilterChange (category, value) {
    let filters = Object.assign({}, this.state.filters)

    filters[category] = value

    this.setState({ filters })
  }

  handleAllFilterChange (category, value) {
    let filters = Object.assign({}, this.state.filters)

    Object.keys(this.state.filters).forEach((filter) => {
      filters[filter] = value
    })

    this.setState({ filters })
  }

  render () {
    let computeWorkExtraStyle = {}

    if (this.state.projects.length <= 0) {
      computeWorkExtraStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }

    return (
      <div className='pt-content-card__body pt-content-card__body__work flex flex-cross-center'>
        {this.state.projects.length > 0 &&
        <WorkFilters
          filters={this.state.filters}
          handleFilterChange={this.handleFilterChange}
          handleAllFilterChange={this.handleAllFilterChange}
          isFiltersOpen={this.props.isFiltersOpen}
          handleDrawerState={this.props.handleDrawerState} />
        }
        <div className={`pt-content-card__body__work-filters__overlay ${this.props.isFiltersOpen ? 'filters-open' : ''}`} onClick={this.props.handleDrawerState} />
        <div className='pt-content-card__body__work-items' style={computeWorkExtraStyle}>
          {this.getFilteredWorkItems()}
        </div>
      </div>
    )
  }
}
