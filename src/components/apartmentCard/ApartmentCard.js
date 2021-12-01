import React, { Component } from 'react'
import data from '../../datas/datas.js'
import './Apartment.css'

class ApartmentCard extends Component {
    render() {
        return (
            <div>
            <img src={data.pictures[0]} alt =''/>
            </div>
        )
    }
}

export default ApartmentCard