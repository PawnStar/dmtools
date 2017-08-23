import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/modal/Modal';
import Form from '../common/form/Form';
import Input from '../common/form/Input';
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
