import React from 'react';
import Branding from './Branding/Branding';
import Services from './Services/Services';
import Trueted from "./Trueted/Trueted";
import Faq from "./FAQ/Faq";

const Home = () => {
    return (
        <div>
            <Branding />
            <Trueted />
            <Services/>
            <Faq/>
        </div>
    );
};

export default Home;