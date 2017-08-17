import React from 'react';

import WorkFilters from './work-filters.jsx';
import WorkItem from './work-item.jsx';

import { projects } from "../../config";

export default class WorkBody extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filters: this.generateFilters(),
      projects: projects
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleAllFilterChange = this.handleAllFilterChange.bind(this);
    this.getFilteredWorkItems = this.getFilteredWorkItems.bind(this);
  }

  generateFilters() {
    let filters = {};

    projects.forEach((project) => {
      project.categories.forEach((category) => {
        if (!Object.keys(filters).includes(category)) {
          filters[category] = true;
        }
      })
    })

    return filters;
  }

  getFilteredWorkItems() {
    return this.state.projects.map((project, i) => {
      let match = false;

      project.categories.forEach((category) => {
        if (this.state.filters[category]) {
          match = true;
        }
      })

      if (match) {
        return <WorkItem key={i} work={project} />
      }
    });
  }

  handleFilterChange(category, value) {
    let filters = Object.assign({}, this.state.filters);

    filters[category] = value;

    this.setState({ filters });
  }

  handleAllFilterChange(category, value) {
    let filters = Object.assign({}, this.state.filters);

    Object.keys(this.state.filters).forEach((filter) => {
      filters[filter] = value;
    });

    this.setState({ filters });
  }

  render() {
    return (
      <div className="pt-content-card__body flex flex-cross-center">
        <WorkFilters filters={this.state.filters} handleFilterChange={this.handleFilterChange} handleAllFilterChange={this.handleAllFilterChange} />
        <div className="pt-content-card__body__work-items">
          {this.getFilteredWorkItems()}
        </div>
      </div>
    );
  }
}
