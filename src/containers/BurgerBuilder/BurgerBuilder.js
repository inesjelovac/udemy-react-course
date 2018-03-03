import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    render() {
        return (
            <Fragment>
                <div>
                    <Burger></Burger>
                </div>
                <div>
                    Build Controls
                </div>
            </Fragment>
        );
    }

};

export default BurgerBuilder;