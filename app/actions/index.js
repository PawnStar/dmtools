import * as types from './types';
import Character from '../helpers/character';

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

export function deleteCharacter(id) {
  return (dispatch) => {
    dispatch(removeCharacterFromEncounter(id));

    return dispatch({
      type: types.DELETE_CHARACTER,
      id
    });
  };
}

export function addToEncounter(id, initiativeRoll) {
  return (dispatch, getState) => {
    const moddedList = [ ...getState().encounter.list, {
      id, initiativeRoll
    } ]
      .filter(item=>getState().characters[item.id])
      .map(item=>({id: item.id, character: new Character(getState().characters[item.id]), roll: item.initiativeRoll}))
      .sort((b,a)=>{
        //TODO: add sort order feature, for manual sorting
        if(a.character.getInitiative(a.roll) !== b.character.getInitiative(b.roll))
          return a.character.getInitiative(a.roll) - b.character.getInitiative(b.roll);

        if(a.character.getAbilityScore('dex') !== b.character.getAbilityScore('dex'))
          return a.character.getAbilityScore('dex') - b.character.getAbilityScore('dex');

        return a.id - b.id;
      }).map(item=>({id: item.id, initiativeRoll: item.roll}));

    return dispatch({
      type: types.ALTER_ENCOUNTER_LIST,
      list: moddedList
    });
  };
}

export function progressTurn() {
  return (dispatch, getState) => {
    const state = getState();

    //No people
    if(state.encounter.list.length < 1)
      return null;

    const currentIndex = state.encounter.list.reduce((found, current, index)=>{
      if(current.id === state.encounter.current)
        return index;
      return found;
    }, -1);
    const nextIndex = (currentIndex + 1 === state.encounter.list.length) ? 0 : (currentIndex + 1);

    return dispatch({
      type: types.PROGRESS_TURN,
      next: state.encounter.list[nextIndex].id
    });
  };
}

export function removeCharacterFromEncounter(id) {
  return (dispatch, getState) => {
    const state = getState();

    const indexOfRemoved = state.encounter.list.reduce((found, current, index)=>{
      if(current.id === id)
        return index;
      return found;
    }, -1);

    if(indexOfRemoved < 0)
      return null;

    const moddedList = [ ...state.encounter.list.slice(0, indexOfRemoved), ...state.encounter.list.slice(indexOfRemoved + 1)];

    if(state.encounter.current === id)
      dispatch(progressTurn());

    if(state.characterPane.selectedCharacter === id)
      dispatch(selectCharacter(''));

    return dispatch({
      type: types.ALTER_ENCOUNTER_LIST,
      list: moddedList
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
      });
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
    });
  };
}

export function editCharacter(id) {
  return {
    type: types.EDIT_CHARACTER,
    id
  };
}

export function saveComplete() {
  return {
    type: types.SAVE_COMPLETE
  };
}
