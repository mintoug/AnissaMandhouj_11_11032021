import React, { Component } from 'react'
import './HeroHomePage.css'
import HeroHome from '../../assets/HeroHome.png'


class HeroHomePage extends Component {
    render() {
        return (
            <div>
                <img src= {HeroHome} alt="paysage forêt" className="heroHome"/>
                <p>Chez vous, partout et ailleurs</p>

            </div>
        )
    }
}
export default HeroHomePage