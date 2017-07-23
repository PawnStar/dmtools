import * as types from '../../actions/types';

const getNextInEncounter = (encounter) => {
  const currentIndex = encounter.list.indexOf(encounter.current);

  const nextIndex = currentIndex + 1;
  if(nextIndex === encounter.list.length)
    return 0;
  return nextIndex;
};

const defaultState = {
  list: [],
  current: 0
};

const currentTurn = (state = defaultState, action) => {
  switch (action.type) {
    case types.PROGRESS_TURN:
      return {
        list: state.list,
        current: getNextInEncounter(state)
      };
    case types.ADD_TO_ENCOUNTER:
      return {
        list: [...state.list, action.id],
        current: state.current
      };
    default:
      return state;
  }
};

export default currentTurn;
