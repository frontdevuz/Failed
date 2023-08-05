import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../../views/Sidebar';

const Admin = () => {
    return ( 
        <React.Fragment>
            <div className='dashboard'>

                <Sidebar>
                    <NavLink to={"/admin/glavniy"}>Glavniy</NavLink>
                    <NavLink to={"/admin/student"}>student</NavLink>
                    <NavLink to={"/admin/university"}>university</NavLink>
                </Sidebar>

                <Outlet/>

            </div>
        </React.Fragment>
     );
}
 
export default Admin;