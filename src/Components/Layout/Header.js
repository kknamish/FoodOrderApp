import React from 'react';
import MealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import HeaderOrdersButton from './HeaderOrdersButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Eats.</h1>
        <div className={classes.buttons}>
          <HeaderOrdersButton onClick={props.onShowOrders} />
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt='Logo'/>  
      </div>
    </>
  )
}

export default Header;