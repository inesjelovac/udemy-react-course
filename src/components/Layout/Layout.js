import React, { Fragment } from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Fragment>
        <div>
            <Toolbar></Toolbar>
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;