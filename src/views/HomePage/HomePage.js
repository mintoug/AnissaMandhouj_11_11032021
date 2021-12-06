import React, { Component } from 'react'
import ApartmentCard from '../../components/ApartmentCard/ApartmentCard';
import HeroHomePage from '../../components/HeroHomePage/HeroHomePage'
import {data} from '../../datas/data';

 class HomePage extends Component {
    render() {
        return (
            <div>
                <HeroHomePage />
                <section className="showApartmentCards">
                    {data.map((apartment)=> {
                      return   <ApartmentCard key={apartment.id} id={apartment.id} 
                      cover={apartment.cover} title={apartment.title} />
                    })}
                </section>
                
            </div>
        )
    }
}

export default HomePage