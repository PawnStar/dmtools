import React from 'react';

import Modal from '../common/modal/Modal';

//React presentational component
const NewCharacter = () => {
  return (
    <Modal close="characters">
      <div style={{padding: '20px'}}>
        New Character
      </div>
    </Modal>
  );
};

export default NewCharacter;
