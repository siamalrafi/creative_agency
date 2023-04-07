import React, { useContext, useEffect, useState } from 'react';
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import { AuthContext } from '../../../Contexts/AuthProvider';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://creative-agency-server-kappa.vercel.app/api/v1/users/das/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data.data[0]))
    }, [user?.email])

    // console.log(userInfo); // available


    return (
        <div>
            {
                userInfo?.role === "user" ?
                    <>
                        <UserDashboard user={user} />
                    </>
                    :
                    <>
                        <AdminDashboard user={user} />
                    </>
            }


        </div>
    );
};

export default Dashboard;