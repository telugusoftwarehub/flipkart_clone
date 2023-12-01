/**
 * Products HOC is wrap from Title, Image and Content Components
 * @Title
 * @Image
 * @Description
 */

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useDispatch } from 'react-redux';
import { shoppingCartCountIncrement, addToCartItem } from "../../redux/actions/shoppingCartActions";

import "./products.hoc.css"

const ProductsHoc = (Title) => {
    const dispatch = useDispatch();
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        fetch("./response/products_list.json")
            .then((res) => res.json())
            .then((response) => {
                console.log('response: ', response)
                setProductsList(response.products);
            })
    }, [])

    const addToCart = (item) => {
        dispatch(shoppingCartCountIncrement());
        dispatch(addToCartItem(item))
    }

    return () => {
        return (
            productsList && productsList.length && productsList.map((item, index) => {
                return (
                    <Card className="cardSection" key={index}>
                        <img
                            alt="Sample"
                            src={item.image}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                <Title title={item.title} />
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {item.warranty}
                            </CardSubtitle>
                            <CardText>
                                <s>{item.price}</s>
                                {item.discountPercentage}
                            </CardText>
                            <Button onClick={() => addToCart(item)}>
                                Add to Card
                            </Button>
                            <Button>
                                Buy
                            </Button>
                        </CardBody>
                    </Card>
                )
            })
        )
    }
}

export default ProductsHoc;