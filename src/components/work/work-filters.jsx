import React from 'react';

import WorkFilterItem from './work-filter-item.jsx';

export default class WorkFilters extends React.PureComponent {
    constructor(props) {
        super(props);
        this.allFiltersAreChecked = this.allFiltersAreChecked.bind(this);
    }
    allFiltersAreChecked() {
        var allFiltersChecked = true;
        Object.keys(this.props.filters).forEach((fil) => {
          if(!this.props.filters[fil]) {
            allFiltersChecked = false;
          }
        });
        return allFiltersChecked;
    }
  render () {
    const filters = Object.keys(this.props.filters).map((fil, i) =>  <WorkFilterItem key={i} name={fil} handleFilterChange={this.props.handleFilterChange} value={this.props.filters[fil]}/>)
    return (
        <div className="pt-content-card__body__work-filters">
            <p>Categories</p>
            <ul className="pt-content-card__body__work-filters__list flex flex-dc">
                <WorkFilterItem name="All" value={this.allFiltersAreChecked()} handleFilterChange={this.props.handleAllFilterChange}/>
                {filters}
            </ul>
        </div>
    );
  }
}