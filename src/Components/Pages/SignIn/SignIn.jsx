import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';



const theme = createTheme();

export default function SignIn() {
  const { signIn, googleSign } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  // sign in with email and password ----------

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    signIn(data.get('email'), data.get('password'))
      .then(result => {
        const user = result.user;
        console.log(result);
        const currentUser = {
          email: data.email,
        };
        console.log(currentUser);
        toast.success(`${user.displayName}, successfully login.`);
        navigate(from, { replace: true });
        navigate("/")

        // fetch('https://my-mirraw-server.vercel.app/jwt', {
        //   method: 'POST',
        //   headers: {
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(currentUser)
        // })
        //   .then(res => res.json())
        //   .then(data => {
        //     console.log(data);
        //     toast.success(' login successfully')
        //     navigate(from, { replace: true });
        //     localStorage.setItem('accessToken', data.token);

        //   })
      })
      .catch(error => {
        console.log(error.message)
        toast.error('something went wrong, try again.')
        setLoginError(error.message);
      });


  };



  // google sign in--------
  const handleGoogleSign = () => {
    googleSign()
      .then(result => {
        const user = result.user;
        console.log(user);
        console.log(result);

        toast.success(`${user.displayName} registered successfully.`)
        const currentUser = {
          email: user?.email,
        };
        console.log(currentUser);

        const userInformation = {
          name: user?.displayName,
          email: user?.email,
          userType: 'Buyer'
        };
      })
      .then(error => {
        console.log(error);
      })
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography sx={{ bgcolor: "primary.green" }} component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              onClick={() => handleGoogleSign()}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Google SignUp
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}