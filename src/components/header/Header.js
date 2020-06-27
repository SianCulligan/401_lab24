import React from 'react';
import { Link } from 'react-router-dom';


// Create <Header /> that has the nav bar, and uses <NavLink /> components to route the user the Home or History pages

// Create a new <History/> inline component that will:
// Show a simple history list on the main page
// Allow a user to click and re-run any previous query


function Header(props) {
    return (
        <header>
            <div className="sidenav">
            <ul>
                <li><Link to='/'><img className="home" alt="home" src='https://i.ya-webdesign.com/images/volume-bar-png-6.png'/></Link></li>
                <li><Link to='/history'><img alt="history" className="history" src="https://lh3.googleusercontent.com/proxy/y6xi5u-nQ5dMQLttrK_t8UKOOhYguw2xY330i0AGXf-nM-TMDaXTCY6g2ODNcXmQTmRtJjouUBU_A1za-sliN81v0DirwrjiUOTKryy9B6dWjXvN1dZZe1e3hhcxbG48PV_nyomx_c7W-WKu3N4YoUYDshTujeLhvtvcY4cTLw8by9vw8lyRlA" /></Link></li>
            </ul>
        </div>


            <h1>RESTy</h1>
        </header>
    );
}

export default Header;
