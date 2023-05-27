import React from 'react';
import classes from './OrderItem.module.css';

const OrderItem = ( props ) => {
    let totalAmount = props.orderedItems.reduce((partialSum, item) => partialSum + (item.price * item.amount), 0).toFixed(2);
    totalAmount = `$${totalAmount}`;
  return (
    <li key={props.id}>
        <p className={classes['order-id']}>Order id - REACTEATS{`000${(Math.random()*100).toFixed()}`.slice(-3)}</p>
        {props.orderedItems.map((item) => (
            <div className={classes['order-item']}>
                <h3 className={classes.name}>{item.name}</h3>
                <div className={classes.summary}>
                    <span className={classes.amount}>x {item.amount}</span>
                    <span className={classes.price}>{`$${item.price}`}</span>
                </div>
            </div>
        ))}
        <div className={classes.total}>
            <span>Total Price</span>
            <span>{totalAmount}</span>
        </div>
    </li>
  )
}

export default OrderItem;