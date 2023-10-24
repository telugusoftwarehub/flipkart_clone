import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav";
import NavBar from '../../components/nav';

// import Carousel from "../../components/carousel";
// import ProductsCarousel from "../../components/productsCarousel";

const DashboardPage = () => {
    const [allProducts, setAllProducts] = useState({})

    useEffect(() => {
        fetch("./response/products.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => res.json()).then((response) => {
            console.log('Response: ', response);
            setAllProducts(response)
        })
    }, [])

    return <>
        <div className="stickyNav">
            <TopNav />
        </div>
        <NavBar />
    </>
}

export default DashboardPage;