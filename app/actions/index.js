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

export function addToEncounter(id) {
  return (dispatch, getState) => {
    //TODO: compute insert location
    // .sort((a,b)=>{
    //  TODO: add sort order feature, for manual sorting
    //   if(a.initiative !== b.initiative)
    //     return a.initiative - b.initiative;
    //
    //   if(a.stats.dex !== b.stats.dex)
    //     return a.stats.dex - b.stats.dex;
    //
    //   return a.id - b.id;
    // })
    const location = 0;

    return dispatch({
      type: types.ADD_TO_ENCOUNTER,
      id,
      index: location
    });
  }
}


const getNextInEncounter = (getState) => {
  const state = getState();
  const currentIndex = state.encounter.list.indexOf(state.encounter.current);
  console.log("Current is: " + state.encounter.current + " at index " + currentIndex);

  const nextIndex = (currentIndex + 1 === state.encounter.list.length) ? 0 : (currentIndex + 1);

  console.log("Next is: " + state.encounter.list[nextIndex] + " at index " + nextIndex);
  return state.encounter.list[nextIndex];
};
export function progressTurn() {
  return (dispatch, getState) => {
    return dispatch({
      type: types.PROGRESS_TURN,
      next: getNextInEncounter(getState)
    });
  };
}
