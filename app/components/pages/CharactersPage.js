import React from 'react';
import PropTypes from 'prop-types';

import CharacterList from '../characterList/CharacterList';
import Link from '../common/Link';
import '../characterList/characterPage.less';

//React presentational component
const CharactersPage = () => {
  return (
    <div className="CharactersPage">
      <CharacterList />
      <Link className="NewCharacterButton" click="characters/add"/>
    </div>
  );
};

export default CharactersPage;
