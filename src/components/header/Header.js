import React from 'react';
import { Link } from 'react-router-dom';

// Create <Header /> that has the nav bar, and uses <NavLink /> components to route the user the Home or History pages

// Create a new <History/> inline component that will:
// Show a simple history list on the main page
// Allow a user to click and re-run any previous query


function Header(props) {
    return (
        <header>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/history'>History</Link></li>
            </ul>

            <h1>RESTy</h1>
        </header>
    );
}

export default Header;
