import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ServiceDetails() {
    const [expanded, setExpanded] = React.useState(false);
    const [namee, setNamee] = useState('');
    const [email, setEmail] = useState('');
    const [serviceName, SetServiceName] = useState('');
    const [pricee, SetPricee] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name},${price}, Email: ${email}, ${serviceName}`);
        setNamee('');
        setEmail('');
        SetServiceName('');
        SetPricee('');
    };


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const datas = useLoaderData();
    const data = datas.data[0];

    const { name, description, price, status, url } = data;


    return (
        <div>
            <Card sx={{ textAlign: "center" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500], }} aria-label="recipe">
                            <img src="https://i.ibb.co/jrLSyhJ/pic.jpg" alt="avatar" srcSet="" />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />

                <CardMedia
                    component="img"
                    height="194"
                    image={url}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph><b>Price: {price}$ </b></Typography>

                        <Typography paragraph>
                            {description}
                        </Typography>
                        <Typography paragraph>
                            As consumers, we rely heavily on service providers to meet our needs and expectations. Service providers are entities or individuals that provide services to customers or clients, such as internet service providers, healthcare providers, or transportation companies. In this blog, we will discuss the importance of service providers and what makes a good service provider.
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    value={namee}
                    onChange={(event) => setNamee(event.target.value)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="Service Name"
                    value={serviceName}
                    onChange={(event) => SetServiceName(event.target.value)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    label="Price"
                    value={pricee}
                    value={price}
                    onChange={(event) => SetServiceName(event.target.value)}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
}