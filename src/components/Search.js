import React from 'react';

import Icon from 'components/Icon.js';

export default class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="search-box">
                    <input className="search-input" type="text" placeholder="Search keywords"/>
                    <button className="search-button">
                        <Icon glyph="search"/>
                    </button>
                </div>
            </div>
        );
    }
}