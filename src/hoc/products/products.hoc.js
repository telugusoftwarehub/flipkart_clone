/**
 * Products HOC is wrap from Title, Image and Content Components
 * @Title
 * @Image
 * @Description
 */

import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

import "./products.hoc.css"

const ProductsHoc = (Title) => {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        fetch("./response/products_list.json")
            .then((res) => res.json())
            .then((response) => {
                setProductsList(response.data);
            })
    }, [])

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
                                <Title title={item.name} />
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                            </CardText>
                            <Button>
                                Add to Card
                            </Button>
                        </CardBody>
                    </Card>
                )
            })
        )
    }
}

export default ProductsHoc;