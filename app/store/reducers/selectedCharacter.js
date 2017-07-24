import * as types from '../../actions/types';

const selectedCharacter = (state = '', action) => {
  switch (action.type) {
    case types.SELECT_CHARACTER:
      return action.id;
    default:
      return state;
  }
};

export default selectedCharacter;
