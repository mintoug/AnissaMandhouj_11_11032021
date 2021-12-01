import React, { Component } from 'react'
import { aboutData } from '../../datas/aboutData'
import HeroAboutPage from '../../components/HeroAboutPage/HeroAboutPage'
import Collaps from '../../components/Collaps/Collaps'
import './AboutPage.css'
export default class AboutPage extends Component {
    render() {
        return (
            <div className="about">
                <HeroAboutPage />
                {aboutData.map((data) => (
                    <Collaps key={data.id} title={data.title} content={data.content} />
                ))
                }
                
            </div>
        )
    }
}
