import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { Button, Stack } from '@mui/material';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


function App() {

  return (
    <div className="App">
      <h1>Hello </h1>

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

    </div>
  );
}

export default App;
