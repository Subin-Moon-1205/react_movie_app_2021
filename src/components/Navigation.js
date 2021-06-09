import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>  {/*Link works inside of the Hashrouter only*/}
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;