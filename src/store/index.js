import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Reducers
import activityPlansReducer from './activity_plans/reducers';

const rootReducer = combineReducers({
  activityPlansReducer,
});

const loggerMiddleware = createLogger();

export default function configStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );
}
