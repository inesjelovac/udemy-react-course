import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (<li key={ingredientKey}>
                <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>:
                {props.ingredients[ingredientKey]}
            </li>);
        });
    return (

        < Fragment >
            <h3>Your order</h3>
            <p>A delicious burger with the folowing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment >
    );
};

export default orderSummary;