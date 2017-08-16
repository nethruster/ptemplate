import React from 'react';

import WorkFilters from './work-filters.jsx';
import WorkItem from './work-item.jsx';

export default class WorkBody extends React.PureComponent {
  render () {
    return (
        <div className="pt-content-card__body flex flex-cross-center">
           <WorkFilters />
           <div className="pt-content-card__body__work-items flex">
              <WorkItem />
           </div>
        </div>
    );
  }
}