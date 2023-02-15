import React from "react";

import TopNav from "../../components/topNav";
import Carousel from "../../components/carousel";
import Modal from "../../components/modal";

const Dashboard = () => {
    return <div>
        <div className="stickyNav">
            <div className='container'>
                <TopNav />
            </div>
        </div>
        <div className='container-fluid bodyContent'>
            <Carousel />
        </div>
        <Modal />

    </div>
}

export default Dashboard;