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
    
    // const [count, setCount] = useState(0);

    // const countIncrement = () => {
    //     setCount(count+1);
    // }

    // const countDecrement = () => {
    //     setCount(count-1);
    // }

    return <>
        <div className="stickyNav">
            <TopNav />
        </div>

        <NavBar />
        <Container>
            <div className="productsView pt_60">
                {productsList()}
                {/* <p>{props.count && props.count}</p>
            <button onClick={() => props.countIncrement()}>Count Increment</button>
            <button onClick={() => props.decrementCount()}>Count Decrement</button> */}
            </div>
        </Container>
    </>
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);