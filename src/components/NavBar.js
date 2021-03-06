import React from "react";
import '../App.css';

function NavBar(props) {
    return (
        <div>
        <nav className="navBar">
            <h1 className="titleText">Employee Directory</h1>
            <h4 className="titleText">Look for employees using search box</h4>
        </nav>
        
        {/* <input className="alignCenter" type="search" placeholder="Search" aria-label="Search"></input>
         */}
         <input className="searchBox" type="search" placeholder="Search" onChange={props.handleChange}/>
        <button onClick={props.sortAlphabetically}>Sort by Name</button>
        </div>


    );
}

export default NavBar;