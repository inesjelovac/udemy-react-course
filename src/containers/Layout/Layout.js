import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

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
                    <Toolbar
                        isAuthenticated={this.props.isAuthenticated}
                        drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                    <SideDrawer closed={this.sideDrawerClosedHandler}
                        open={this.state.showSideDrawer}
                        isAuthenticated={this.props.isAuthenticated}></SideDrawer>
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    }
};


export default connect(mapStateToProps)(Layout);