import * as types from '../../../actions/types';

const addCharacter = (state = {}, action) => {
  switch(action.type) {
    case types.SAVE_CHARACTER:
      return {
        ...state,
        [action.character.id]: action.character
      };
    case types.DELETE_CHARACTER:
      const newState = {...state};
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default addCharacter;
