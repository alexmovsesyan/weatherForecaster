import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
  switch(action.type){
    case FETCH_WEATHER:
      if(action.payload.request.status!='404')
        return [action.payload.data, ...state];
  }
  return state;
}
