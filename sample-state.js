{
  characters: {
    id: {
      id: 0,
      player: true,
      generic: false,
      name: "Lilith",
      stats:{
        dex: 12,
        str: 10,
        con: 11,
        wis: 14,
        int: 16,
        cha: 20
      },
      savingThrows:{
        dex: 1,
        str: 0,
        con: 1,
        wis: 2,
        int: 3,
        cha: 7
      }
      proficiency: 3,
      armorClass: 20,
      maxHP: 40,
      curHP: 20,
      initiativeBonus:2,
      initiative: 18,
      spellSave: 16,
      //passiv perception computed
      conditions:{
        blinded,
        charmed,
        deafened,
        frightened,
        grappled,
        incapacitated,
        invisible,
        paralyzed,
        petrified,
        poisoned,
        prone,
        restrained,
        stunned,
        unconscious
      },
      exhaustionLevel: 0
    }
  },

  encounter:{
    list: [
      //Array of character IDs
    ],
    current: id
  },

  selectedCharacter: id,
}
