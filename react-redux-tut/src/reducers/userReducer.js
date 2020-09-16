import {UPDATE_USER, FETCH_SUCCESS} from '../actions/user-actions'

export default function userReducer(state = "", {type, payload}){
    switch(type){
      case UPDATE_USER:
        return payload.user;
        break;
      case FETCH_SUCCESS:
        return payload[1].name
    default:
        return state
    }
  }