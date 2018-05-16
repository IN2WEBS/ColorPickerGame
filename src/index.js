import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import clientsReducer from './reducers/clientsReducer';
import workersReducer from './reducers/workersReducer';
import servicesReducer from './reducers/servicesReducer';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'

const rootReducer = combineReducers({
  clients:clientsReducer,
  workers:workersReducer,
  services:servicesReducer
});
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));
registerServiceWorker();
