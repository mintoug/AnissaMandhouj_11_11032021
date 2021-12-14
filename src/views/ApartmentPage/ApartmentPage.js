import React, {Component} from 'react';
import './ApartmentPage.css';
import Title from '../../components/Title/Title';
import Tag from '../../components/Tag/Tag';
import Local from '../../components/Local/Local';
import Profil from '../../components/Profil/Profil';
import Collaps from '../../components/Collaps/Collaps'
import Rating from '../../components/Rating/Rating';
import Slides from '../../components/Slides/Slides';
 class ApartmentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartment: this.getApartment(),
        }
    }

    getApartment = () => {
        const apartment = this.props.apartments.filter(
            (apt) => apt.id === this.props.match.params.id
        )

        return apartment[0]
    }

    getTags = () => {
        return (
            <div className="apartmentTagsBox">

                {this.state.apartment.tags.map((tag, index) => (
                    <Tag tag={tag} key={index} />
                ))}
            </div>
        )
    }

    getCollapsibles = () => {
        return (
            <section className="apartmentCollapsible">
                <Collaps title='Description' content={this.state.apartment.description}/>
                <Collaps title='Équipements' content={this.state.apartment.equipments}/>
            </section>
        )
    }
 
    render() {

        return (
            
            <main>
                   <Slides pictures={this.state.apartment.pictures}/>
                <section className="apartmentInformations">
                    <div className="apartmentBox">
                        <Title title = {this.state.apartment.title}/>
                        <Local location = {this.state.apartment.location}/>
                        {this.getTags()}
                    </div>
                    <div className="apartmentBoxAside">
                        <Profil host = {this.state.apartment.host}/>
                        <Rating rating={this.state.apartment.rating}/>
                        
                    </div>
                </section>
                {this.getCollapsibles()}
                
            </main>
        )
    }
}

export default ApartmentPage;