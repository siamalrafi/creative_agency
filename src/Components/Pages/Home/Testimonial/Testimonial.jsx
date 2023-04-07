import React from 'react';
import RecipeReviewCard from "./TestimonalHelpers"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Testimonial = () => {
    const testimonalData = [
        {
            number: "012225545552",
            name: "Md. Abdul Karim",
            email: "karim@example.com",
            image:
                "https://img.freepik.com/free-photo/handsome-male-with-marker-looking-camera_23-2148200990.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
        },
        {
            number: "012245645655",
            name: "Mostafa Kamal",
            email: "kamal@example.com",
            image:
                "https://img.freepik.com/free-photo/front-view-young-female-student-grey-coat-with-copybooks-pink-background-lessons-university-college_140725-35000.jpg?w=996&t=st=1680457859~exp=1680458459~hmac=8d3e936d294a1de7e3002c96573dc06cc35c879b84389ac2b469fa895f0786fb",
        },
        {
            number: "012245565655",
            name: "Fatema Begum",
            email: "begum@example.com",
            image:
                "https://img.freepik.com/free-photo/responsible-student_23-2147650755.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
        },
        {
            number: "012256756655",
            name: "Md. Rohim Uddin",
            email: "rohim@example.com",
            image:
                "https://image.freepik.com/free-photo/portrait-happy-woman_171337-36706.jpg",
        },

        {
            number: "012225547755",
            name: "Farida Akter",
            email: "akter@example.com",
            image:
                "https://img.freepik.com/free-photo/business-lady-cute-young-blonde-woman-office-outfit-glasses-touching-corner-glasses_140725-161312.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
        },
        {
            number: "012225545655",
            name: "Shahada Khatun",
            email: "khatoon@example.com",
            image:
                "https://img.freepik.com/free-photo/woman-with-tablet-showing-ok-sign_23-2148435501.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
        },
        {
            number: "012225545757",
            name: "Abul Kalam",
            email: "kalam@example.com",
            image:
                "https://img.freepik.com/free-photo/unpleased-male-teacher-wearing-glasses-points-with-pointer-stick-blackboard-sitting-table-with-school-tools-classroom_141793-114329.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.2.1039112445.1666531408&semt=ais",
        },
        {
            number: "012225545655",
            name: "Tasnim Akter",
            email: "tasnim@example.com",
            image:
                "https://img.freepik.com/free-photo/young-woman-standing-arms-crossed-sweater-black-jeans-looking-pretty-front-view_176474-47465.jpg?w=996&t=st=1680458185~exp=1680458785~hmac=af95f1a9348feb3d2b26c8c025b68c74ebb1d39f0547f7fa258b22fc0f085ac0",
        }
    ]

    return (
        <div sx={{ display: "inline", }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


            <Grid container spacing={2}>
                {testimonalData?.map((data, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <RecipeReviewCard data={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Testimonial;