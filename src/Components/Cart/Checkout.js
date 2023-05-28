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

    const nameChangeHandler = () => {
        if(isBigger(inputNameRef.current.value)){
            setIsFormDetailsValid((prevState) => ({
                ...prevState,
                name: true
            }))
        }
    }

    const streetChangeHandler = () => {
        if(isStreet(inputStreetRef.current.value)){
            setIsFormDetailsValid((prevState) => ({
                ...prevState,
                street: true
            }))
        }
    }

    const pinChangeHandler = () => {
        if(isPinCode(inputPinRef.current.value)){
            setIsFormDetailsValid((prevState) => ({
                ...prevState,
                pin: true
            }))
        }
    }

    const cityChangeHandler = () => {
        if(isBigger(inputCityRef.current.value)){
            setIsFormDetailsValid((prevState) => ({
                ...prevState,
                city: true
            }))
        }
    }

    const phoneChangeHandler = () => {
        if(isPhoneNumber(inputPhoneRef.current.value)){
            setIsFormDetailsValid((prevState) => ({
                ...prevState,
                phone: true
            }))
        }
    }
    
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
            <label htmlFor='name'>Full Name{!isFormDetailsValid.name && <span className={classes['error-text']}><small>(*Please enter min. 4 characters.)</small></span>}</label>
            <input 
                id='name' 
                name='name'
                ref={inputNameRef}
                onChange={nameChangeHandler}
            />
        </div>
        <div className={`${classes.control} ${isFormDetailsValid.street? '': classes.invalid}`}>
            <label htmlFor='street'>Street{!isFormDetailsValid.street && <span className={classes['error-text']}><small>(*Please enter min. 10 characters.)</small></span>}</label>
            <input 
                id='street' 
                name='street' 
                ref={inputStreetRef}
                onChange={streetChangeHandler}
            />
        </div>
        <div className={`${classes.control} ${isFormDetailsValid.city? '': classes.invalid}`}>
            <label htmlFor='city'>City{!isFormDetailsValid.city && <small className={classes['error-text']}>(*Please enter min. 4 characters.)</small>}</label>
            <input 
                id='city' 
                name='city' 
                ref={inputCityRef}
                onChange={cityChangeHandler}
            />
        </div>
        <div className={`${classes.control} ${isFormDetailsValid.pin? '': classes.invalid}`}>
            <label htmlFor='pin'>Postal Code{!isFormDetailsValid.pin && <small className={classes['error-text']}>(*Please enter a 5 digit Postal Code.)</small>} </label>
            <input 
                id='pin' 
                name='pin' 
                ref={inputPinRef}
                maxLength={5}
                onChange={pinChangeHandler}
            />
        </div>
        <div className={`${classes.control} ${isFormDetailsValid.phone? '': classes.invalid}`}>
            <label htmlFor='phone'>Contact{!isFormDetailsValid.phone && <small className={classes['error-text']}>(*Please enter a 10 digit Contact number.)</small>} </label>
            <input 
                id='phone' 
                name='phone'
                ref={inputPhoneRef}
                maxLength={10}
                onChange={phoneChangeHandler}
            />
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} type='button' onClick={props.onBack}>{'<< '}Back</button>
            <button className={classes.button} type='sumbit'>Order{' >>'}</button>
        </div>
    </form>
  )
}

export default Checkout;
