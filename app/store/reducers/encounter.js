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
    case types.ALTER_ENCOUNTER_LIST:
      return {
        list: action.list,
        current: state.current
      };
    default:
      return state;
  }
};

export default currentTurn;
