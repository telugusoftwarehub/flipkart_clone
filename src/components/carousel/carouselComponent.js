import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
    return <Carousel>
    <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1680/280/image/628777116a4d9f61.png" />
    </div>
    <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1680/280/image/4e47fc336ff58202.jpg" />
    </div>
    <div>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1680/280/image/e0ee984825a5f461.jpg" />
    </div>
</Carousel>
}

export default CarouselComponent;