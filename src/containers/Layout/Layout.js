import React, { Component, Fragment } from 'react';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((previousState) => {
            return { showSideDrawer: !previousState.showSideDrawer };
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                    <SideDrawer closed={this.sideDrawerClosedHandler}
                        open={this.state.showSideDrawer}></SideDrawer>
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;