import React, { Component } from 'react'
import heroAbout from "../../assets/heroAbout.png"
import './HeroAboutPage.css'

class HeroAboutPage extends Component {
    render() {
        return (
            <div>
                <img src={heroAbout} alt="montagnes" className="imgAbout"/>
            </div>
        )
    }
}

export default HeroAboutPage