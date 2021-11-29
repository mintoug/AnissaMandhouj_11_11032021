import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import HomePage from '../../views/HomePage/HomePage'
import ApartmentPage from '../../views/ApartmentPage/ApartmentPage'
import AboutPage from '../../views/AboutPage/AboutPage'

class App extends Component {
    render() {
        return (
            
            <div  className ="App">
                <Navbar />
                <Routes>
                    
             
                 <Route path ='/' element= {<HomePage />}/>

                 <Route path ='/apartment' element ={<ApartmentPage />} />
                     
                 <Route path ='/about' element = {<AboutPage />} />
                     
                </Routes>
              <Footer /> 
               
            </div>
        
        )
    }
}
 export default App;