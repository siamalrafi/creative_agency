import React from 'react';
import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UserDashboard = ({ user }) => {

    const { data: allbooking = [], isLoading, refetch } = useQuery({
        queryKey: ['allbooking'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/bookings/das/${user?.email}`)
            const data = await res.json();
            return data.data
        }
    });
    console.log(allbooking);



    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    return (
        <div>
            <Typography sx={{ textAlign: "center", fontSize: "40px", mt: "10px" }} variant="body2" color="text.secondary">
                <b> Welcome to Dashboard.</b>
            </Typography>


            {/* dashboard start--- */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: "gray", marginTop: "10px", color: "white", padding: "40px", fontSize: "20px" }}>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Emai</TableCell>
                            <TableCell align="right">Service Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody>
                        {
                            allbooking?.map((booking, id) =>
                                <TableRow sx={{ marginTop: "10px" }} key={id}>
                                    <TableCell>{booking?.name}</TableCell>
                                    <TableCell align="right">{booking?.email}</TableCell>
                                    <TableCell align="right">{booking?.serviceName}</TableCell>
                                    <TableCell align="right">{booking?.price}</TableCell>
                                    <TableCell align="right">{"Pay"}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>


        </div >
    );
};

export default UserDashboard;