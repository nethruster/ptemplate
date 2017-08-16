import React from 'react';

import WorkFilterCheckbox from './work-filter-checkbox.jsx';

export default class WorkFilters extends React.PureComponent {
  render () {
    return (
        <div className="pt-content-card__body__work-filters">
            <p>Categories</p>
            <ul className="pt-content-card__body__work-filters__list flex flex-dc">
                <WorkFilterCheckbox name="All" />
                <WorkFilterCheckbox name="Client" />
                <WorkFilterCheckbox name="Personal" />
                <WorkFilterCheckbox name="Nethruster" />
            </ul>
        </div>
    );
  }
}