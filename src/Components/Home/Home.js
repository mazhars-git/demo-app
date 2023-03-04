import React from 'react';
import ItemCard from '../ItemCard';
import PortfolioG from '../PortfolioG/PortfolioG';
import ProgressBar2 from '../Progressbar/ProgressBar2.js';
const Home = () => {
    return (
        <div className='p-5 text-white'>
            <h1>This is home</h1>
            <ItemCard />            
            <ProgressBar2 />
            <PortfolioG />
        </div>
    );
};

export default Home;