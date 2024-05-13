import React, { useState, useEffect } from 'react';
import ProductsWrapper from "../components/ProductsWrapper";
import Banner from '../components/Banner';

function Home() {

    return (
        <div className='home__container'>
            <Banner/>
            <ProductsWrapper/> 
        </div>
    );
}

export default Home;