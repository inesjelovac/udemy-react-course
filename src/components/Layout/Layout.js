import React, { Fragment } from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Fragment>
        <div>
            <Toolbar></Toolbar>
            <SideDrawer></SideDrawer>
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;