{
  characters: {
    id: {
      id: 0,
      player: true,
      generic: false,
      name: "",
      stats:{
        dex: 0,
        str: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0
      },
      savingThrows:{
        dex: 3, //Can just be number (for monster)
        str: true //can be a boolean (for based on proficiency)
        //Assume ones not here are simply untrained
      },
      proficiency: 2,
      skills: {
        animalHandling: 5, //Can just be a number
        performance: {
          trained: 0 //0, 1, 2 (bard)
        }
        //Assume skills not here are merely untrained
      },
      feats: {
        //jackOfAll
      }
      armorClass: 20,
      walkingSpeed: 40,
      maxHP: 40,
      curHP: 20,
      spellStat: '',
      conditions:[
        'blinded',
        'charmed',
        'deafened',
        'frightened',
        'grappled',
        'incapacitated',
        'invisible',
        'paralyzed',
        'petrified',
        'poisoned',
        'prone',
        'restrained',
        'stunned',
        'unconscious'
      },
      languages: [

      ]
      exhaustionLevel: 0
    }
  },

  encounter:{
    list: [
      {id: '', initiativeRoll: 10},
      //Array of character IDs
    ],
    current: id
  },

  characterPane: {
    selectedCharacter: id
  }

}
