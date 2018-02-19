import {createStore, applyMiddleware, combineReducers} from 'redux';
/*import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';*/
import ymmttReducer from './reducers/ymmtt';
import messageReducer from './reducers/messages';

const reducer = combineReducers({
  // namespace : target reducer
  ymmtt: ymmttReducer,
  // state.message
  message: messageReducer
});

export default createStore(reducer, {});
