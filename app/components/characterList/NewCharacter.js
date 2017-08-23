import React from 'react';

import Modal from '../common/modal/Modal';
import Form from '../common/form/Form';
import Input from '../common/form/Input';
import Button from '../common/form/Button';

//React presentational component
const NewCharacter = () => {
  return (
    <Modal close="characters">
      <div style={{padding: '20px'}}>
        <h3>New Character</h3>
        <Form setProp={console.log}>
          <Input name="stuff"/>
          <Button onSubmit={console.log}>Submit</Button>
        </Form>
      </div>
    </Modal>
  );
};

export default NewCharacter;
