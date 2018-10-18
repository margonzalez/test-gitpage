import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { reducer as formReducer } from 'redux-form';
import { fetchMiddleware } from 'redux-recompose';
import Immutable from 'seamless-immutable';

// import { actions as userActions } from './user/actions';
import { reducer as auth, defaultState as authDefault } from './auth/reducer';
import { reducer as alert } from './alert/reducer';
// import { reducer as bill, defaultState as billDefault } from './bill/reducer';
import { reducer as user, defaultState as userDefault } from './user/reducer';
// import { reducer as payment, defaultState as paymentDefault } from './payment/reducer';
// import { reducer as sidebar, defaultState as sidebarDefault } from './sidebar/reducer';
// import { reducer as notifications, defaultState as notificationDefault } from './notificationHandlers';

export const history = createHistory();

const deleteValue = (state, action) => {
  if (action.type === '@@redux-form/UNREGISTER_FIELD') {
    if (state) {
      const {
        values: { [action.payload.name]: unregistered, ...values }
      } = state;
      return { ...state, values };
    }
  }
  return state;
};

const form = formReducer.plugin({
  UTFORM: deleteValue
});

const reducers = combineReducers({
  auth,
  // bill,
  form,
  router,
  alert,
  user
  // notifications,
  // payment,
  // sidebar
});

const middlewares = [routerMiddleware(history)];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-composer Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getGlobalState = () =>
  Immutable({
    auth: { ...authDefault, sessionLoading: false },
    account: accountDefault,
    // bill: billDefault,
    user: userDefault
    // payment: paymentDefault,
    // sidebar: sidebarDefault,
    // notication: notificationDefault
  });

const rootReducer = (state, action) => {
  // if (action.type === userActions.REMOVE_USER) {
  //   const newState = getGlobalState(state);
  //   return reducers({ ...newState, form: state.form, alert: state.alert }, action);
  // }
  return reducers(state, action);
};

const store = createStore(rootReducer, composeEnhancers(...enhancers));

export default store;
