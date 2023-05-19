import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.items, cartCtx.totalAmount);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const cartItems = (
       <ul className={classes['cart-items']}> 
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    summary={item.summary}
                    price={item.price}   
                    amount={item.amount}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))}
        </ul>)

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Price</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
  )
}

export default Cart;