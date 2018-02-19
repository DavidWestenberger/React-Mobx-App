import {  MESSAGE_SHOW} from "./constants";

/* action creators */
export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg});

export default function(state="", action){
  switch(action.type){

    case MESSAGE_SHOW:
      return action.payload;
      
    default:
      return state;
  }
}