import React, { Fragment } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.css';

import PropTypes from 'prop-types';


const sideDrawer = (props) => {
    let attachClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={attachClasses.join(' ')}>
                <div className={classes.Logo}><Logo></Logo></div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuthenticated}></NavigationItems>
                </nav>
            </div>
        </Fragment>

    );
};

sideDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    closed: PropTypes.func.isRequired
}

export default sideDrawer;