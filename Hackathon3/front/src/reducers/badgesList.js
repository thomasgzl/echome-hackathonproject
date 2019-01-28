

const initialState = [
  {
    name: "Noctambule",
    progress: 76,
    unlockedImage: 'trophee1unlock',
    lockedImage: 'trophee1',
  },
  {
    name: "EcoStar",
    progress: 35,
    unlockedImage: '../img/trophee2unlock.png',
    lockedImage: '../img/trophee2.png',
  },
  {
    name: "Magicien d'Oz",
    progress: 100,
    unlockedImage: '../img/trophee3unlock.png',
    lockedImage: '../img/trophee3.png'
  },
  {
    name: "Le Bon Samaritain",
    progress: 46,
    unlockedImage: '../img/trophee4unlock.png',
    lockedImage: '../img/trophee4.png'
  },
  {
    name: "Offline",
    progress: 21,
    unlockedImage: '../img/trophee5unlock.png',
    lockedImage: '../img/trophee5.png',
  },
  {
    name: "CarboCool",
    progress: 100,
    unlockedImage: '../img/trophee6unlock.png',
    lockedImage: '../img/trophee6.png',
  },
  {
    name: "Le Sobre",
    progress: 75,
    unlockedImage: '../img/trophee7unlock.png',
    lockedImage: '../img/trophee7.png',
  },
  {
    name: "ECO MASTER",
    progress: 100,
    unlockedImage: '../img/trophee8unlock.png',
    lockedImage: '../img/trophee8.png',
  }
]

export const badgesList = (state=initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}