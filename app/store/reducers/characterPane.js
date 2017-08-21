import * as types from '../../actions/types';

const defaultState = {
  mode: 'viewing',
  selectedCharacter: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.SELECT_CHARACTER:
      return {
        selectedCharacter: action.id
      };
    default:
      return state;
  }
};

export default reducer;
