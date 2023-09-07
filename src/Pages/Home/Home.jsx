import React from 'react';
import Banner from './components/Banner/Banner';
import Expertises from './components/Expertises/Expertises';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import CustomerTestimonials from './components/CustomerTestimonials/CustomerTestimonials';
import { useLoaderData } from 'react-router-dom';
import Contact from './components/Contact/Contact';

const Home = () => {
    const feedbacks = useLoaderData();
    return (
        <div>
            <Banner />
            <Expertises />
            <AboutMe />
            <Portfolio />
            <CustomerTestimonials feedbacks={feedbacks} />
            <Contact />
        </div>
    );
};

export default Home;