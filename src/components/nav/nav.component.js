import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
    return <>
        <Link to="/"> Dashboard </Link>
        <Link to="/products"> Products </Link>
        <Link to="/items"> Items </Link>
    </>
}

export default NavComponent;