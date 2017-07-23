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
  return {
    type: types.ADD_TO_ENCOUNTER,
    id
  };
}

export function progressTurn() {
  return {
    type: types.PROGRESS_TURN
  };
}
