const initialState = [
  {
    id: 1,
    name: "Salon",
    img: "../images/salon.png",
    type: "salon",
    consumption: "8 khw",
    classColor: "red",
    selected: true,
  },
  {
    id: 2,
    name: "Salle de bain 1",
    img: "../images/sdb.png",
    type: "salle de bain",
    consumption: "1 khw",
    classColor: "green",
    selected: false,
  },
  {
    id: 3,
    name: "Salle de bain 2",
    img: "../images/sdb.png",
    type: "salle de bain",
    consumption: "0 khw",
    classColor: "green",
    selected: false,
  },
  {
    id: 4,
    name: "Chambre 1",
    img: "../images/chambre.png",
    type: "chambre",
    consumption: "4 khw",
    classColor: "orange",
    selected: false,
  },
  {
    id: 5,
    name: "Chambre 2",
    img: "../images/chambre.png",
    type: "chambre",
    consumption: "1 kwh",
    classColor: "green",
    selected: false,
  },
  {
    id: 6,
    name: "Cuisine",
    img: "../images/cuisine.png",
    type: "cuisine",
    consumption: "3 kwh",
    classColor: "orange",
    selected: false,
  }
]

export const roomList = (state=initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}