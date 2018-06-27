import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import asyncComponent from './components/asyncComponent/asyncComponent';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';

import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSigunup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path='/auth' component={asyncAuth}></Route>
        <Route path='/' component={BurgerBuilder}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    );

    if (this.props.isAuthenitcated) {
      // u Auth komponenti se dogodi redirekcija nakon prijave, pa zato mora biti i ovdje
      routes = (
        <Switch>
          <Route path='/auth' component={asyncAuth}></Route>
          <Route path='/checkout' component={asyncCheckout}></Route>
          <Route path='/orders' component={asyncOrders}></Route>
          <Route path='/logout' component={Logout}></Route>
          <Route path='/' component={BurgerBuilder}></Route>
          <Redirect to='/'></Redirect>
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenitcated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSigunup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
