import React, { Component } from 'react'

export default class Tag extends Component {
    render() {
        return (
            <div>
                <span className="apartmentTag">{this.props.tag}</span>
            </div>
        )
    }
}
