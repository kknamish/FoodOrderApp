import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/cart-context';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);
    const addToCartHandler = () => {
      cartCtx.addItem({ 
        id: props.id,
        name: props.name,
        amount: 1,
        price: props.price
      })
    }

    const targetItem = cartCtx.items.filter((item)=>{
      return item.id === props.id;
    })
    let itemAmount = 0;
    if(targetItem[0]){
      itemAmount = targetItem[0].amount;
    }

    const removeFromCartHandler = () => {
      cartCtx.removeItem(props.id);
    }

  return (
    <li className={classes.meal} key={props.id}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} onRemoveFromCart={removeFromCartHandler} amount={itemAmount} />
        </div>
    </li>
  )
}

export default MealItem;
