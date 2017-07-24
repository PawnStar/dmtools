import * as types from '../../actions/types';

const defaultState = {
  list: [],
  current: 0
};

const currentTurn = (state = defaultState, action) => {
  switch (action.type) {
    case types.PROGRESS_TURN:
      return {
        list: state.list,
        current: action.next
      };
    case types.ADD_TO_ENCOUNTER:
      return {
        list: [
          ...state.list.slice(0,action.index),
          action.id,
          ...state.list.slice(action.index)
        ],
        current: state.current
      };
    default:
      return state;
  }
};

export default currentTurn;
