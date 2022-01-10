import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// global style
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import './Layout/styles/Main.scss';

// libraries
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';

// reducers
import reducers from './Reducers/reducer';

// store
const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);

reportWebVitals();
