import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <switch>
            <Route path='/checkout' component={Checkout}></Route>
            <Route path='/' exact component={BurgerBuilder}></Route>
          </switch>
        </Layout>
      </div >
    );
  }
}

export default App;
