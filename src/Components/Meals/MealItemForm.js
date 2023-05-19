import React from 'react';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const hasItems = props.amount > 0;

  return (
    <div className={classes.form}>
        {!hasItems && <button onClick={props.onAddToCart}>+ Add</button>}
        {hasItems && <div className={classes.actions}>
            <button onClick={props.onRemoveFromCart}>−</button>
            <span className={classes.amount}>{ props.amount }</span>
            <button onClick={props.onAddToCart}>+</button>
        </div>}
    </div>
  )
}

export default MealItemForm;
