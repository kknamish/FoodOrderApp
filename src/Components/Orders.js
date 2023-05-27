import React from 'react';
import Modal from './UI/Modal';
import useFetch from '../Hooks/use-fetch';
import OrderItem from './OrderItem';
import classes from './Orders.module.css';

const Orders = ( props ) => {
    const {data, isLoading, error} = useFetch('https://react-55e29-default-rtdb.firebaseio.com/orders.json');

    const ordersList = [];
    for(const key in data){
        const order = {
            key: key,
            id: key,
            orderedItems: data[key].orderedItems,
            userData: data[key].user
        }
        ordersList.push(order);
    }

    const orderItems = (
        <ul className={classes['orders-items']}> 
            {ordersList.reverse().map((item) => (              
                <OrderItem
                    key={item.key}
                    id={item.id}
                    orderedItems={item.orderedItems}
                    userData={item.userData}
                />
            ))}
        </ul>)
  return (
    <Modal>
        <h2><center>Your Orders.</center></h2>
        {error && <p><center>An Error occured while loading orders.</center></p>}
        {!error && isLoading && <p><center>Loading...</center></p>}
        {!error && !isLoading && !ordersList.length && <p><center>No orders found.</center></p>}
        {!error && !isLoading && orderItems}
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideOrders}>Close</button>
        </div>
    </Modal>
  )
}

export default Orders