import React from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
    {
      id: 'm5',
      name: 'Panzenella',
      description: 'Ideal for sunny summers',
      price: 22.5,
    }
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => 
        <Card>
          <MealItem 
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
          />
        </Card>
    );
  return (
    <section className={classes.meals}>
        <ul>{mealsList}</ul>
    </section>
  )
}

export default AvailableMeals