import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/modal/Modal';
import Form from '../common/form/Form';
import TextInput from '../common/form/TextInput';
import NumberInput from '../common/form/NumberInput';
import Button from '../common/form/Button';
import Checkbox from '../common/form/Checkbox';
import {connect} from 'react-redux';
import {createCharacter} from '../../actions';
import {push} from 'react-router-redux';

const NewCharacter = ({create, closeModal}) => {
  const handleForm = data=>{
    create({
      name: data.name,
      stats: {
        dex: data.stats_dex,
        str: data.stats_str,
        con: data.stats_con,
        wis: data.stats_wis,
        int: data.stats_int,
        cha: data.stats_cha
      },
      savingThrows: {},
      proficiency: data.proficiency,
      skills: {},
      armorClass: data.armorClass,
      walkingSpeed: data.walkingSpeed,
      maxHP: data.maxHP,
      curHP: data.maxHP
    });
    closeModal();
  }

  return (
    <Modal close="characters">
      <div style={{padding: '20px'}}>
        <h3>New Character</h3>
        <Form setProp={console.log}>
          <TextInput label="Name" name="name"/>
          <NumberInput label="Dexterity" name="stats_dex"/>
          <NumberInput label="Strength" name="stats_str"/>
          <NumberInput label="Constitution" name="stats_con"/>
          <NumberInput label="Wisdom" name="stats_wis"/>
          <NumberInput label="Intelligence" name="stats_int"/>
          <NumberInput label="Charisma" name="stats_cha"/>
          <NumberInput label="Proficiency bonus" name="proficiency"/>
          <NumberInput label="Armor Class" name="armorClass"/>
          <NumberInput label="Walking Speed" name="walkingSpeed"/>
          <NumberInput label="Maximum HP" name="maxHP"/>
          <Checkbox label="Generic Character" name="generic"/>
          <Button onSubmit={handleForm}>Submit</Button>
        </Form>
      </div>
    </Modal>
  );
};

NewCharacter.propTypes = {
  create: PropTypes.func,
  closeModal: PropTypes.func
}

const mapDispatchToProps = dispatch=>({
  create: character=>dispatch(createCharacter(character)),
  closeModal: ()=>dispatch(push('../characters'))
});

export default connect(
  null,
  mapDispatchToProps
)(NewCharacter);
