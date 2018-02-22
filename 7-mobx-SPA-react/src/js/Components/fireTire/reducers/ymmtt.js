import  getymmttData  from "./../services/ymmttService";
import { createStore } from "redux";
import { LOAD_YMMTT_DATA } from "./constants";
import { showMessage } from './messages';

export const loadYmmtt = (ymmttData) => ({type: LOAD_YMMTT_DATA, payload: ymmttData});

const initialState = {
  ymmtt: {}
}

/* action creator: async [ return a thunk function] */
export const fetchYmmttData = () => {
  return (dispatch) => {
    // dispatch(showMessage('Loading ymmtt Data...'));
    getymmttData()
      .then(ymmttData => dispatch(loadYmmtt(ymmttData)));
  }
}


/* redux state */
export default (state = initialState, action) => {
  switch(action.type){
    case LOAD_YMMTT_DATA:
      return {...state, 
        ymmtt: action.payload
      };

    default:
      return state        
  }
}
