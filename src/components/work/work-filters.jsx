import React from 'react';

import WorkFilterItem from './work-filter-item.jsx';

import Icon from '../partials/icon.jsx';

export default class WorkFilters extends React.PureComponent {
  constructor(props) {
    super(props);

    this.allFiltersAreChecked = this.allFiltersAreChecked.bind(this);
  }

  allFiltersAreChecked() {
    let allFiltersChecked = true;

    Object.keys(this.props.filters).forEach((fil) => {
      if (!this.props.filters[fil]) {
        allFiltersChecked = false;
      }
    });

    return allFiltersChecked;
  }

  render() {
    const filters = Object.keys(this.props.filters).map((filter, i) => <WorkFilterItem key={i} name={filter} handleFilterChange={this.props.handleFilterChange} value={this.props.filters[filter]} />);

    return (
      <div className={`pt-content-card__body__work-filters ${this.props.isFiltersOpen ? 'filters-open' : '' }`}>
      <p className="flex flex-cross-center flex-sa">
        <button className="pt-content-card__header--nav__icon flex-full-center pointer" onClick={this.props.handleDrawerState}>
          <Icon iconName="close" />
        </button>
        Categories
      </p>
        <ul className="pt-content-card__body__work-filters__list flex flex-dc">
          <WorkFilterItem name="All" value={this.allFiltersAreChecked()} handleFilterChange={this.props.handleAllFilterChange} />
          {filters}
        </ul>
      </div>
    );
  }
}
