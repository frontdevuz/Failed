import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.scss"

const Sidebar = (props) => {
    function LogOut() {
        localStorage.clear()
    }
    return ( 
        <React.Fragment>
            <div className='sidebar__container'>
                <div className="sidebar">
                    <h1>logo</h1>
                    {props.children}
                    <Link to={"/"} onClick={LogOut}>Log out</Link>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Sidebar;