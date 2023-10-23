import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './productsCarousel.css';

const ProductsCarouselComponent = ({ products, responsive }) => {
    console.log('products: ', products)
    return <div className="flex product_wrap">
        <div className="lSection">
            {products.desc}
        </div>
        <div className="rSection">
            <Carousel responsive={responsive}>
            {
                products && products.list.length && products.list.map((item) => {
                    return (
                    <div className="flex product">
                        <p className="name">{item.name}</p>
                        <p><img src={item.image} /></p>
                        <p>{item.startPrice}</p>
                    </div>
                    )
                })
            }
        </Carousel>
        </div>
    </div>
}

export default ProductsCarouselComponent;