import React from 'react'

import "../../App.css";
import HeroSection from "../HeroSection"; 
import CardItem from '../CardItem';
import Cards from '../Cards';
import Footer from '../Footer';


function Home(){
    return(
        <>
        <HeroSection/>
        <Cards/>
        <Footer/>
        </>
    )

};
export default Home;