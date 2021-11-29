import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/logo.png'

export default class Navbar extends Component {
    render() {
        return (
            <header>
            <img src={logo} alt="kasa"></img>
            <nav>
                <Link to ="/" className="linkHomePage">Accueil</Link>
                <Link to ="/About" className="linkAboutPage">A propos</Link>
            </nav>
            </header>
        )
    }
}
