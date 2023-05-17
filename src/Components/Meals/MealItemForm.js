import React, { useState } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../UI/Input';

const MealItemForm = (props) => {
    const [itemCount, setItemCount] = useState(0);

    const clickHandler = (event) => {
        console.log('Clikcekd!!!')
        event.preventDefault();
        setItemCount((prevState) => {
            if(prevState < 15){
                return prevState+1;
            }
            return prevState;
        })
    }
  return (
    <form className={classes.form}>
        <Input label='Qty' 
            input={{
                id: 'amount_'+props.id,
                type: 'number',
                min: '1',
                max: '15',
                step: '1',
                defaultValue: '1',
                value: itemCount
            }} 
        />
        <button onClick={clickHandler}>+ Add</button>
    </form>
  )
}

export default MealItemForm