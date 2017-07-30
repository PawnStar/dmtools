const getScoreFromStat = stat=>Math.floor(stat / 2) - 5;

const abilityStat = {
  athletics: 'str',
  acrobatics: 'dex',
  sleightOfHand: 'dex',
  stealth: 'dex',
  arcana: 'int',
  history: 'int',
  investigation: 'int',
  nature: 'int',
  religion: 'int',
  animalHandling: 'wis',
  insight: 'wis',
  medicine: 'wis',
  perception: 'wis',
  survival: 'wis',
  deception: 'cha',
  intimidation: 'cha',
  performance: 'cha',
  persuasion: 'cha',
  str: 'str',
  dex: 'dex',
  con: 'con',
  int: 'int',
  wis: 'wis',
  cha: 'cha'
};

class Character {
  constructor(character){
    this.char = character;
  }

  getAbilityScore(name){
    const char = this.char;
    const stat = char.stats[abilityStat[name]];

    if(!char.skills[name])
      return getScoreFromStat(stat);

    if(typeof char.skills[name] === 'number')
      return char.skills[name];

    const timesTrained = char.skills[name].trained || 0;

    if(timesTrained === 0 && char.feats.jackOfAll)
      return getScoreFromStat(stat) + Math.floor(char.proficiency / 2)

    return getScoreFromStat(stat) + timesTrained * char.proficiency;
  }

  getInitiative(roll){
    return roll + this.getAbilityScore('dex');
  }

  getSavingThrow(name){
    const char = this.char;
    const proficient = char.proficiency.saves[name];
    const bonus = char.proficiency.bonus;
    const score = this.getStatMod(name);

    if(proficient)
      return score + bonus;
    return bonus;
  }

  getStatMod(name){
    const char = this.char;

    return getScoreFromStat(char.stats[name]);
  }

  getSpellAttackMod(){
    const char = this.char;

    const proficiency = char.proficiency.bonus;
    const spellMod = this.getStatMod(this.spellStat);

    return char.proficiency.bonus + spellMod;
  }

  getSpellSaveDC(){
    const char = this.char;

    const proficiency = char.proficiency.bonus;
    const spellMod = this.getStatMod(this.spellStat);

    return 8 + char.proficiency.bonus + spellMod;
  }
}

export default Character;
