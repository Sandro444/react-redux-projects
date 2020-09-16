import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware,compose,createStore, combineReducers} from 'redux';
import {Provider} from "react-redux"
import productsReducer from "./reducers/productsReducer"
import userReducer from "./reducers/userReducer"
import thunk from "redux-thunk"


const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(allReducers, {
  products: [{name: "Redux"}, {name: "React"}],
  user: "Sandro"
  },
  allStoreEnhancers
)







ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App james="j" />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
