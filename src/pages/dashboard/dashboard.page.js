import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav";
import Carousel from "../../components/carousel";
import ProductsCarousel from "../../components/productsCarousel";
// import Modal from "../../components/modal";

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

    return <div>
        <div className="stickyNav">
            <div className='container'>
                <TopNav />
            </div>
        </div>
        {/* <div className='container-fluid bodyContent'>
            <Carousel />
        </div>
        <div className='container-fluid bodyContent' id="electronics">
            <ProductsCarousel products={allProducts.electronics} />
        </div>
        <div className='container-fluid bodyContent' id="toys">
            <ProductsCarousel products={allProducts.toys} />
        </div>

        <div className='container-fluid bodyContent' id="soolSummer">
            <ProductsCarousel products={allProducts.coolSummer} />
        </div> */}

    </div>
}

export default DashboardPage;