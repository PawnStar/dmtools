import * as types from '../../actions/types';

const defaultState = {
  mode: 'viewing',
  selectedCharacter: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SELECT_CHARACTER:
      return {
        mode: 'viewing',
        selectedCharacter: action.id
      };
    case types.EDIT_CHARACTER:
      return {
        selectedCharacter: action.id,
        mode: 'editing'
      }
    case types.SAVE_CHARACTER:
      return {
        mode: 'viewing',
        selectedCharacter: action.character.id
      }
    default:
      return state;
  }
};

export default reducer;
