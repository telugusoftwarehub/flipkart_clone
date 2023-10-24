import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modalComponent.css';

const ModalComponent = (args) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return <div>
        <Button onClick={toggle}>
            Click Me
        </Button>
            <Modal isOpen={modal} toggle={toggle} className="fk_modal">
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <div className="left">
                        <h2>Login</h2>
                        <p>Get access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    <div className="right">
                        <input placeholder="Enter Email/Mobile number" />
                        <p>By continuing, you agree to Flipkart's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</p>

                        <button className="btn_otp"> Request OTP </button>

                        <p><a href="#">New to Flipkart? Create an account</a></p>
                    </div>
                </ModalBody>
            </Modal>
    </div>
}

export default ModalComponent;