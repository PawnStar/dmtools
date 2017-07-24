import * as types from './types';

let nextID = 0;
export function createCharacter(character) {
  return {
    type: types.CREATE_CHARACTER,
    character: {
      id: nextID++,
      ...character
    }
  };
}

export function addToEncounter(characterID) {
  return (dispatch, getState) => {
    const moddedList = [ ...getState().encounter.list, characterID ]
      .filter(id=>getState().characters[id])
      .map(id=>getState().characters[id])
      .sort((b,a)=>{
        //TODO: add sort order feature, for manual sorting
        if(a.initiative !== b.initiative)
          return a.initiative - b.initiative;

        if(a.stats.dex !== b.stats.dex)
          return a.stats.dex - b.stats.dex;

        return a.id - b.id;
      }).map(character=>character.id)

    return dispatch({
      type: types.ALTER_ENCOUNTER_LIST,
      list: moddedList
    });
  }
}


const getNextInEncounter = (getState) => {

};
export function progressTurn() {
  return (dispatch, getState) => {
    const state = getState();
    const currentIndex = state.encounter.list.indexOf(state.encounter.current);
    const nextIndex = (currentIndex + 1 === state.encounter.list.length) ? 0 : (currentIndex + 1);

    return dispatch({
      type: types.PROGRESS_TURN,
      next: state.encounter.list[nextIndex]
    });
  };
}
