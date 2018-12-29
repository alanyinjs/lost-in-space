import React from 'react';
import PropTypes from 'prop-types';

import sprite from 'assets/icons/sprite.js';


export default class Icon extends React.Component {
    static propTypes = {
        glyph: PropTypes.string.isRequired,
    };

    constructor() {
        super();
        this.getIcon = this.getIcon.bind(this);
    }

    getIcon() {
        try {
            return sprite[this.props.glyph].svg;
        } catch(error) {
            console.warn(`The image $this.props.glyph cannot be retrieved!`);
            return (
                <svg viewBox="0 0 20 20">
                    <rect fill="red" height="20" width="20" x="0" y="0"/>
                </svg>
            );
        }
    }

    render() {
        return this.getIcon();
    }
}