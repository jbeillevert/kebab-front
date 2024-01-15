import React from 'react';
import Navbar from '../03.Components/Navbar';
import Hero from '../02.Sections/Hero';

const HomePage = () => {
    return (
        <div className="h-full w-full max-w-7xl flex flex-col">
            <Navbar />
            <Hero />
        </div>
    );
};

export default HomePage;
