import React from 'react';
import MealsImage from '../../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Eats.</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={MealsImage} alt='Logo'/>  
      </div>
    </>
  )
}

export default Header;