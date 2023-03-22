import React from 'react';
import { styled } from '@mui/material/styles';
import Question from './Question';



const Text = styled('div')(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
}));

const BoldText = styled("h1")(({ theme }) => ({
    marginLeft: "20px",
    fontSize: "50px",
    display: "inline-block",
    color: theme.palette.primary.green,
}))



const Faq = () => {
    return (
        <div>
            <Text>
                Frequently Ask
                <BoldText> Any Question</BoldText>
            </Text>


            <Question/>
        </div>
    );
};

export default Faq;