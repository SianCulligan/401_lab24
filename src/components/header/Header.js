import React from 'react';
import { Link } from 'react-router-dom';

// Create <Header /> that has the nav bar, and uses <NavLink /> components to route the user the Home or History pages

// Create a new <History/> inline component that will:
// Show a simple history list on the main page
// Allow a user to click and re-run any previous query

//THIS PAGE CALLS IN HISTORY.JS

// props.links = an array of objects with keys { displayName, url}
// props.className
// props.style
function Header(props) {
    let navLinks = [];

    for (let i = 0; i < props.links.length; i++) {
        navLinks.push(
            <li key={i}>
                <Link to={props.links[i].url}>
                    {props.links[i].displayName}
                </Link>
            </li>,
        );
    }

    return (
        <nav className={props.className} style={props.styles}>
            <ul>{navLinks}</ul>
        </nav>
    );
}

export default Header;



// import React from 'react'


// function Header(props) {
//     let navLinks = [];

//     for (let i = 0; i < props.links.length; i ++) { 
//         navLinks.push(
//             <li key={i}>
//                 <Link to={props,links[i].url>{props}}

//             </li>
//             props.links[i])
//     }
// }

// export default Headers;

