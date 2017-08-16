import React from 'react';

export default class WorkFilterCheckbox extends React.PureComponent {
    render() {
        return (
            <li className="md__checkbox">
                <label className="pointer">
                    <input type="checkbox" /><span className="md__checkbox-material"><span className="md__checkbox-check"></span></span> {this.props.name}
                </label>
            </li>
        );
    }
}