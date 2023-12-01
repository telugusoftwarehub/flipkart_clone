import { UncontrolledPopover, PopoverHeader, PopoverBody, ListInlineItem, List } from 'reactstrap';
import { useDispatch } from 'react-redux';
import {qtyIncrementCount, qtyDecrementCount} from "../../redux/actions/shoppingCartActions"

import "./popover.component.css";

const PopoverComponent = (props) => {
    const dispatch = useDispatch();
    const { cartItems } = props;

    const qtyIncretement = (product) => {
        dispatch(qtyIncrementCount(product))
    }

    const qtyDecrement = (product) => {
        dispatch(qtyDecrementCount(product))
    }

    return <UncontrolledPopover
        placement="bottom"
        target="PopoverClick"
        trigger="click"
    >
        <PopoverHeader>
            Cart
        </PopoverHeader>
        <PopoverBody>
            <List type="unstyled">
                {cartItems
                    && cartItems.length > 0
                    && cartItems.map((item) => {
                        return (<li className="cartItem">
                            <div className="label">{item.title}</div>
                            <div>Qty: {item.qty}</div>
                            <div>
                                <button onClick={() => qtyIncretement(item)}>
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                </button>
                                <button onClick={() => qtyDecrement(item)}>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                </button>
                            </div></li>)
                    })
                }
            </List>
        </PopoverBody>
    </UncontrolledPopover>
}

export default PopoverComponent;