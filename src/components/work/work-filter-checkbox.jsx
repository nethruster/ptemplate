import React from 'react';

export default class WorkFilterCheckbox extends React.PureComponent {
    render() {
        return (
            <li className="checkbox">
                <label className="pointer">
                    <input type="checkbox" /><span className="checkbox-material"><span className="check"></span></span> {this.props.name}
                </label>
            </li>
        );
    }
}