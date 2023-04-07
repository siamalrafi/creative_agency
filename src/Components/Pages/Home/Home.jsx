import React, { useContext } from 'react';
import Branding from './Branding/Branding';
import Services from './Services/Services';
import Trueted from "./Trueted/Trueted";
import Faq from "./FAQ/Faq";
import Contact from '../Contact/Contact';
import { AuthContext } from '../../../Contexts/AuthProvider';
import RecipeReviewCard from './Testimonial/Testimonial';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    const { name, email } = useContext(AuthContext);


    console.log(name, email);

    return (
        <div>
            <Branding />
            <Trueted />
            <Services />
            <Faq />
            <Testimonial/>
            <Contact />
        </div>
    );
};

export default Home;