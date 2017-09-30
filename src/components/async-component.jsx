import React from 'react';

// import ViewLoading from './views/shared/view-loading/view-loading.js';

// Huge thanks to Hassan Ali on https://hackernoon.com/code-splitting-for-react-router-with-webpack-and-hmr-bb509968e86f

export default (loader, collection) => (
    class AsyncComponent extends React.PureComponent {
        constructor(props) {
            super(props);

            this.state = { component: null };
        }

        componentWillMount() {
            if (!this.state.component) {
                loader().then((component) => {
                    this.setState({ component });
                });
            }
        }

        render() {
            return this.state.component ? <this.state.component { ...this.props } { ...collection } /> : null;
        }
    }
);
