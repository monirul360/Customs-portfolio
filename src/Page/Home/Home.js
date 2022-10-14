import React from 'react';
import Contact from '../../Component/Contact/Contact';
import Hero from '../../Component/Hero/Hero';
import Service from '../../Component/Service/Service';
import Work from '../../Component/Work/Work';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Service></Service>
            <Work></Work>
            <Contact></Contact>
        </div>
    );
};

export default Home;