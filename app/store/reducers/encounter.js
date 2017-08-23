import * as types from '../../actions/types';

const defaultState = {
  list: [],
  current: ''
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
        current: action.list.length > 1 ? state.current : ''
      };
    default:
      return state;
  }
};

export default currentTurn;
