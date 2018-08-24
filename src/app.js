import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses'; //this is a named file (no default)
import { setTextFilter } from './actions/filters'; //this is a named file (no default)
import getVisibleExpense from './selectors/expenses';  //this is a DEFAULT file 
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
//import './sandbox/promises';

const store = configureStore();

//console.log('test');

//store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
//store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
//store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

const state = store.getState();


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
