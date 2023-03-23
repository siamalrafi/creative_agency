import React from 'react';
import Branding from './Branding/Branding';
import Services from './Services/Services';
import Trueted from "./Trueted/Trueted";
import Faq from "./FAQ/Faq";
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Branding />
            <Trueted />
            <Services />
            <Faq />
            <Contact />
        </div>
    );
};

export default Home;