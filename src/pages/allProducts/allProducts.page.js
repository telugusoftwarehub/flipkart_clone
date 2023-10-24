import React, { useState } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import ProductsHoc from "../../hoc/products/products.hoc";
import Title from "../../components/title";

import 'bootstrap/dist/css/bootstrap.min.css';
import './allProducts.page.css';
import { incrementCount, decrementCount } from "../../redux/actions/shoppingCartActions";
import TopNav from "../../components/topNav";
import NavBar from '../../components/nav';


const AllProductsPage = (props) => {
    const productsList = ProductsHoc(Title);
    console.log('props: ', props)
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

const mapStateToProps = (state) => {

    return ({
        count: state.count
    })
}

const mapDispatchToProps = (dispatch) => ({
    countIncrement: () => dispatch(incrementCount()),
    decrementCount: () => dispatch(decrementCount())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);