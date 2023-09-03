import React from 'react';
import Banner from './components/Banner/Banner';
import Expertises from './components/Expertises/Expertises';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner />
            <Expertises />
            <AboutMe />
            <Portfolio />
        </div>
    );
};

export default Home;