import React from 'react';
import ItemCard from '../ItemCard';
import ProgressBar2 from '../Progressbar/ProgressBar2.js';
const Home = () => {
    return (
        <div className='bg-dark p-5'>
            <h1>This is home</h1>
            <ItemCard />
            
            <ProgressBar2 />
        </div>
    );
};

export default Home;