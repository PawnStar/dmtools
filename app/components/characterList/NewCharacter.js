import React from 'react';

import Modal from '../common/modal/Modal';
import Form from '../common/form/Form';
import Input from '../common/form/Input';
import Button from '../common/form/Button';
import Checkbox from '../common/form/Checkbox';

const NewCharacter = () => {
  return (
    <Modal close="characters">
      <div style={{padding: '20px'}}>
        <h3>New Character</h3>
        <Form setProp={console.log}>
          <Input label="Name" name="name"/>
          <Input label="Dexterity" name="stats_dex"/>
          <Input label="Strength" name="stats_str"/>
          <Input label="Constitution" name="stats_con"/>
          <Input label="Wisdom" name="stats_wis"/>
          <Input label="Intelligence" name="stats_int"/>
          <Input label="Charisma" name="stats_cha"/>
          <Input label="Proficiency bonus" name="proficiency"/>
          <Input label="Armor Class" name="armorClass"/>
          <Input label="Walking Speed" name="walkingSpeed"/>
          <Input label="Maximum HP" name="maxHP"/>
          <Checkbox label="Generic Character" name="generic"/>
          <Button onSubmit={console.log}>Submit</Button>
        </Form>
      </div>
    </Modal>
  );
};

export default NewCharacter;
