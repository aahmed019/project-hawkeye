import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const modalErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case 'RECEIVE_MODAL_ERROR':
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_USER_LOGOUT:
      return [];
    default:
      return state;
  }
}