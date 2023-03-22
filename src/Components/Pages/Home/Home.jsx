import React from 'react';
import Branding from './Branding/Branding';
import Services from './Services/Services';
import Trueted from "./Trueted/Trueted";


const Home = () => {
    return (
        <div>
            <Branding />
            <Trueted />
            <Services/>
        </div>
    );
};

export default Home;