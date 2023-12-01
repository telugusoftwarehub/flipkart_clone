import React from 'react';
import './topNavComponent.css';
import Search from '../search';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Popover from '../popover';

import logo from '../../assets/flipkart-plus_8d85f4.png';
import plus from '../../assets/plus_aef861.png';

const TopNavComponent = (props) => {
    const links = [
        { label: 'Becom a seller', link: "#" },
        { label: 'More', link: "#" },
        { label: 'Cart', link: "#" }
    ]
    
    const { cartCount, cartItems } = props;

    return (
        <div class="container flex">
            <div className="logo flex">
                <div className="logo_setting">
                    <a href="#"><img src={logo} width="75" /></a>
                    <a className="plus" href="#">Explore <span className="plusColor">Plus</span><img width="10" src={plus} /></a>
                </div>

            </div>
            <div className="search">
                <Search />
            </div>
            <div className="loginBtn">
                <a href="#">Login</a>
            </div>
            {
                links
                && links.length > 0
                && links.map((item, index) => {
                    return (
                        <>
                            <div className="other_link">
                                <a href={item.link} key={index}>
                                    { item.label === "Cart" }

                                    <span> {item.label} </span>
                                    {
                                        item.label === "Cart"
                                            ? <Button
                                                type="button"
                                                id="PopoverClick">{cartCount}</Button>
                                            : null
                                    }
                                </a>
                                <Popover cartItems={cartItems} />
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        cartCount: state.shoppingCartCount,
        cartItems: state.cartItems
    })
}

const mapDispatchToProps = (dispatch) => { }

export default connect(mapStateToProps, mapDispatchToProps)(TopNavComponent);