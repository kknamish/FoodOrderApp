import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isNumber = (value) => !isNaN(value);
const isBigger = (value) => value.trim().length > 3;
const isStreet = (value) => value.trim().length > 9;
const isPinCode = (value) => isNumber(value) && value.trim().length === 5;
const isPhoneNumber = (value) => isNumber(value) && value.trim().length === 10;

const Checkout = ( props ) => {
    const [isFormDetailsValid, setIsFormDetailsValid] = useState({
        name: true,
        street: true,
        pin: true,
        city: true,
        phone: true,
    });

    const inputNameRef = useRef();
    const inputStreetRef = useRef();
    const inputPinRef = useRef();
    const inputCityRef = useRef();
    const inputPhoneRef = useRef();
    
    const orderHandler = (event) => {
        event.preventDefault();

        const enteredName = inputNameRef.current.value;
        const enteredStreet = inputStreetRef.current.value;
        const enteredPin = inputPinRef.current.value;
        const enteredCity = inputCityRef.current.value;
        const enteredPhone = inputPhoneRef.current.value;

        const isEnteredNameValid = isBigger(enteredName);
        const isEnteredStreetValid = isStreet(enteredStreet);
        const isEnteredPinValid = isPinCode(enteredPin);
        const isEnteredCityValid = isBigger(enteredCity);
        const isEnteredPhoneValid = isPhoneNumber(enteredPhone);

        setIsFormDetailsValid({
            name: isEnteredNameValid,
            street: isEnteredStreetValid,
            pin: isEnteredPinValid,
            city: isEnteredCityValid,
            phone: isEnteredPhoneValid,
        });
        const isFormValid = 
            isEnteredNameValid && 
            isEnteredStreetValid && 
            isEnteredPinValid && 
            isEnteredCityValid && 
            isEnteredPhoneValid;

        if(!isFormValid){
            return;
        }

        // submit cart data.
        props.onOrder({
            name: enteredName,
            street: enteredStreet,
            pin: enteredPin,
            city: enteredCity,
            phone: enteredPhone
        });
    }
  return (
    <form className={classes.form} onSubmit={orderHandler}>
        <div className={`${classes.control} ${isFormDetailsValid.name? '': classes.invalid}`}>
            <label htmlFor='name'>Full Name</label>
            <input 
                id='name' 
                name='name'
                ref={inputNameRef}
            />
            {!isFormDetailsValid.name && <p className={classes['error-text']}>*Please enter a Valid Full Name(Min. 4 characters).</p>}
        </div>
        <div className={`${classes.control} ${isFormDetailsValid.street? '': classes.invalid}`}>
            <label htmlFor='street'>Street</label>
            <input 
                id='street' 
                name='street' 
                ref={inputStreetRef}
            />
            {!isFormDetailsValid.street && <p className={classes['error-text']}>*Please enter a Valid Street(Min. 10 characters).</p>}
        </div>
        <div className={`${classes.control} ${isFormDetailsValid.city? '': classes.invalid}`}>
            <label htmlFor='city'>City</label>
            <input 
                id='city' 
                name='city' 
                ref={inputCityRef}
            />
            {!isFormDetailsValid.city && <p className={classes['error-text']}>*Please enter a Valid City(Min. 4 characters).</p>}
        </div>
        <div className={`${classes.control} ${isFormDetailsValid.pin? '': classes.invalid}`}>
            <label htmlFor='pin'>Postal Code</label>
            <input 
                id='pin' 
                name='pin' 
                ref={inputPinRef}
            />
            {!isFormDetailsValid.pin && <p className={classes['error-text']}>*Please enter a Valid 5 digit Postal Code.</p>}
        </div>
        <div className={`${classes.control} ${isFormDetailsValid.phone? '': classes.invalid}`}>
            <label htmlFor='phone'>Contact</label>
            <input 
                id='phone' 
                name='phone'
                ref={inputPhoneRef}
            />
            {!isFormDetailsValid.phone && <p className={classes['error-text']}>*Please enter a Valid 10 digit Contact.</p>}
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} type='button' onClick={props.onBack}>{'<< '}Back</button>
            <button className={classes.button} type='sumbit'>Order{' >>'}</button>
        </div>
    </form>
  )
}

export default Checkout;
