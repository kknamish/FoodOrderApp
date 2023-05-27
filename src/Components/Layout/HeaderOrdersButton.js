import React from 'react';
import classes from './HeaderOrdersButton.module.css';

const OrdersButton = ( props ) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
              Orders
        </button>
    )
  }

export default OrdersButton;