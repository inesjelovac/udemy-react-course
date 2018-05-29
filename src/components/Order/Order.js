import React from 'react';

import classes from './Order.css';

const order = () => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: Salad (5)</p>
            <p>Price: <strong>USD: 5</strong></p>
        </div>
    );
};

export default order;