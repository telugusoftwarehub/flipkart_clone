import { UncontrolledPopover, PopoverHeader, PopoverBody, Button } from 'reactstrap';

const PopoverComponent = (props) => {
    const { cartItems } = props;
    
    return <UncontrolledPopover
    placement="bottom"
    target="PopoverClick"
    trigger="click"
>
    <PopoverHeader>
        Cart
    </PopoverHeader>
    <PopoverBody>
        {cartItems
            && cartItems.length > 0
            && cartItems.map((item) => {
                return (<p>{item.name}</p>)
            })
            }
    </PopoverBody>
</UncontrolledPopover>
}

export default PopoverComponent;