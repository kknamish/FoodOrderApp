import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [ordered, setOrdered] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    }

    const checkoutHandler = () => {
        setIsCheckout(true);
    }

    const backHandler = () => {
        setIsCheckout(false);

    }
    const orderHandler = async (userData) => {
        setIsSubmitting(true);
        const response = await fetch('https://react-55e29-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        console.log(response);
        setIsSubmitting(false);
        setOrdered(true);
        cartCtx.clearCart();
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
            {!isCheckout && 
                <div>
                    {cartItems}
                    <div className={classes.total}>
                        <span>Total Price</span>
                        <span>{totalAmount}</span>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                        {hasItems && <button className={classes.button} onClick={checkoutHandler}>Checkout{' >>'}</button>}
                    </div>
                </div>
            }
            {isCheckout && !ordered && !isSubmitting && <Checkout onOrder={orderHandler} onBack={backHandler}/>}
            {isSubmitting && <center><p>Placing order...</p></center>}
            {ordered && <center><p>Thank you! Your ordered has been placed.</p></center>}
        </Modal>
  )
}

export default Cart;