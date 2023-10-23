import React from 'react';
import './topNavComponent.css';
import Search from '../search';

import logo from '../../assets/flipkart-plus_8d85f4.png';
import plus from '../../assets/plus_aef861.png';

const TopNavComponent = () => {
    const links = [
        { label: 'Becom a seller', link: "#" },
        { label: 'More', link: "#" },
        { label: 'Cart', link: "#" }
    ]

    return (
        <>
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
                                {
                                    item.label === "Cart" &&
                                    <svg class="cartIcon" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                                }
                               <span>{item.label}</span>
                               </a>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default TopNavComponent;