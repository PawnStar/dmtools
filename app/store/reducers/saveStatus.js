import * as types from '../../actions/types';

const defaultState = 'saved';

const reducer = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {

    //On Redux start, we don't need to save
    case '@@INIT':
      return 'saved';

    //When we just finished saving, we don't need to save
    case types.SAVE_COMPLETE:
      return 'saved';

    //Ignore page nav
    case '@@router/LOCATION_CHANGE':
      return state;

    //Ignore character select
    case types.SELECT_CHARACTER:
      return state;

    //Everything else, we need to save
    default:
      return 'unsaved';
  }
};

export default reducer;
