import React from 'react';
import Modal from '../../common/modal/Modal';
import CharacterList from './CharacterList';

const CharacterInsertPane = () => {
  console.log("Stuff")
  return (
    <Modal close="encounter">
      <CharacterList/>
    </Modal>
  );
};

export default CharacterInsertPane;
