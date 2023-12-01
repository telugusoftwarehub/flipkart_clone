import React, { useState } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import ProductsHoc from "../../hoc/products/products.hoc";
import Title from "../../components/title";

import 'bootstrap/dist/css/bootstrap.min.css';
import './allProducts.page.css';
import TopNav from "../../components/topNav";
import NavBar from '../../components/nav';


const AllProductsPage = (props) => {
    const productsList = ProductsHoc(Title);
    
    return <>
        <div className="stickyNav">
            <TopNav />
        </div>

        <NavBar />
        <Container>
            <div className="productsView pt_60">
                {productsList()}
            </div>
        </Container>
    </>
}

export default AllProductsPage;