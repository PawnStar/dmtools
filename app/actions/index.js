import * as types from './types';

function createNewId(characters) {
  const id = Math.random().toString(36).slice(2);
  if(characters[id]) return createNewId(characters);
  return id;
}

export function createCharacter(character) {
  return (dispatch, getState) => {
    return dispatch({
      type: types.SAVE_CHARACTER,
      character: {
        id: createNewId(getState().characters),
        ...character
      }
    });
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
      }).map(character=>character.id);

    return dispatch({
      type: types.ALTER_ENCOUNTER_LIST,
      list: moddedList
    });
  };
}

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

export function selectCharacter(id) {
  return (dispatch, getState) => {
    const state = getState();
    const currentCharacter = state.characterPane.selectedCharacter;

    if(id !== currentCharacter)
      return dispatch({
        type: types.SELECT_CHARACTER,
        id
      })
    return null;
  };
}

export function saveCharacter(character) {
  return (dispatch, getState) => {
    const state = getState();
    if(!character.id || !state.characters[character.id])
      return dispatch(createCharacter(character));

    return dispatch({
      type: types.SAVE_CHARACTER,
      character
    })
  }
}

export function editCharacter(id) {
  return {
    type: types.EDIT_CHARACTER,
    id
  }
}

export function saveComplete() {
  return {
    type: types.SAVE_COMPLETE
  };
}
