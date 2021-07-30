import { BEGIN_LOADING, FINISH_LOADING } from "../actions/ui_actions";

const _default = {
  status: 'loaded'
}

export default function(oldState = _default, action){
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type){
    case BEGIN_LOADING:
      newState.status = 'loading';
      return newState;

    case FINISH_LOADING:
      newState.status = 'loaded';
      return newState;

    default:
      return oldState;
  }
};