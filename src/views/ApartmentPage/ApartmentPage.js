import React, {Component} from 'react';
import './ApartmentPage.css';
import Title from '../../components/Title/Title';
// import Tag from '../../components/Tag/Tag';
import {data} from '../../datas/data'
 class ApartmentPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartment: this.getApartment(),
        }
    }

    getApartment = () => {
        const apartment = data.filter(
            (apt) => apt.id === this.props.match.params.id
        )

        return apartment
    }

    // getTags = () => {
    //     return (
    //         <div className="apartmentTagsBox">
    //             {this.state.apartment.tags.map((tag, index) => (
    //                 <Tag tag={tag} key={index} />
    //             ))}
    //         </div>
    //     )
    // }


 
    render() {

        return (
            
            <main>
            

                    <div className="apartmentBox">
                        <Title title={this.state.apartment.title}/>
                        {/* {this.getTags()} */}
                        </div>
                     <h1>hello</h1>
                    
                    
            
                
            </main>
        )
    }
}

export default ApartmentPage;