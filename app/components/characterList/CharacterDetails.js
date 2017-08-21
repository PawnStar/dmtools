import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Modal from '../common/modal/Modal';

//React presentational component
const CharacterDetails = ({match, getCharacter}) => {
  const characterID = match.params.characterID;
  const character = getCharacter(characterID);
  return (
    <Modal close="characters">
      <div style={{padding: '20px'}}>
        <pre>{JSON.stringify(character, null, 2)}</pre>
      </div>
    </Modal>
  );
};

CharacterDetails.propTypes = {
  match: PropTypes.object,
  getCharacter: PropTypes.func
};

const mapStateToProps = state => ({
  getCharacter: id=>state.characters[(Object.keys(state.characters) || []).filter(c=>c===id)[0]]
});
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetails);
