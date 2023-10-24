import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
    return <div class="container topNav">
        <Link to="/"> Dashboard </Link>
        <Link to="/products"> Products </Link>
        <Link to="/items"> Items </Link>
    </div>
}

export default NavComponent;