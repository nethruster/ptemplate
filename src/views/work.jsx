import React from 'react';

import Nav from '../components/partials/nav.jsx';
import WorkBody from '../components/work/work-body.jsx';

import lang from 'lang';

const langContext = lang.home;

export default class Work extends React.PureComponent {
  constructor(props) {
    super(props);
  
    this.state = {
      isFiltersOpen: false
    }
    
    this.handleDrawerState = this.handleDrawerState.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize(e) {
    if(window.innerWidth <= 700) {
      this.setState({isFiltersOpen: false});
    }
  }  

  handleDrawerState() {
    this.setState({isFiltersOpen: !this.state.isFiltersOpen});
  }

  render() {
    return (
      <div className="pt-content-card__work-container flex flex-dc">
        <Nav icon="folder" title={langContext.work} handleDrawerState={this.handleDrawerState} isFiltersOpen={this.state.isFiltersOpen} />
        <WorkBody handleDrawerState={this.handleDrawerState} isFiltersOpen={this.state.isFiltersOpen} />
      </div>
    );
  }
}
