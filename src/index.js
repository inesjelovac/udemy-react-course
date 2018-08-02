import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { watchAuth, watchBurgerBuilder, watchOrder } from './store/sagas/index';


const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuilder);
sagaMiddleware.run(watchOrder);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
