const initialState = [
  [
    {
      id: 1,
      name: "LG 22MT49DF",
      img: "../images/tv.png",
      type: "Television",
      consumption: 22,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "MSI GL63 8RC-274XFR",
      img: "../images/laptop.png",
      type: "Laptop",
      consumption: 30,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "PS4",
      img: "../images/ps4.png",
      type: "Console de jeux",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 4,
      name: "Nintendo Switch",
      img: "../images/nintendo.png",
      type: "Console de jeux",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 5,
      name: "LDLC PC Bazooka",
      img: "../images/bazooka.png",
      type: "Ordinateur",
      consumption: 350,
      description: 'Ordinateur Gamer: très gourmand en energie;      En veille(durée): 16jour/mois;   Consommation par jour: 23,03 kWh/jours',
    },
    {
      id: 6,
      name: "lampe ikea",
      img: "../images/lamp.png",
      type: "Eclairage",
      consumption: 50,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 7,
      name: "FanJu FJ3365",
      img: "../images/stationmeteo.png",
      type: "Station météo",
      consumption: 12,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "Miroir connecté",
      img: "../images/mirror.png",
      type: "Objet connecté",
      consumption: 24,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "lampe ikea",
      img: "../images/lamp.png",
      type: "Eclairage",
      consumption: 50,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "Radio réveil",
      img: "../images/reveil.png",
      type: "Hifi",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 4,
      name: "Radiateur",
      img: "../images/radiateur.png",
      type: "Chauffage",
      consumption: 500,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "Radiateur",
      img: "../images/radiateur.png",
      type: "Chauffage",
      consumption: 500,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "MSI GL63 8RC-274XFR",
      img: "../images/laptop.png",
      type: "Laptop",
      consumption: 30,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "PS4",
      img: "../images/ps4.png",
      type: "Game console",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 4,
      name: "Nintendo Switch",
      img: "../images/nintendo.png",
      type: "Game console",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 5,
      name: "LDLC PC Bazooka",
      img: "../images/bazooka.png",
      type: "Computer",
      consumption: 350,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "Behringer audio",
      img: "../images/berhinger.png",
      type: "Hifi",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "lampe ikea",
      img: "../images/lamp.png",
      type: "Light",
      consumption: 50,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "Radio réveil",
      img: "../images/reveil.png",
      type: "Hifi",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "LG 22MT49DF",
      img: "../images/tv.png",
      type: "Television",
      consumption: 22,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "MSI GL63 8RC-274XFR",
      img: "../images/laptop.png",
      type: "Laptop",
      consumption: 30,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "PS4",
      img: "../images/ps4.png",
      type: "Game console",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 4,
      name: "Nintendo Switch",
      img: "../images/nintendo.png",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 5,
      name: "LDLC PC Bazooka",
      img: "../images/bazooka.png",
      type: "Computer",
      consumption: 350,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ],
  [
    {
      id: 1,
      name: "HISENSE RQ560N4WC1",
      img: "../images/fridge.png",
      type: "Electro-ménager",
      consumption: 15,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 2,
      name: "lampe ikea",
      img: "../images/lamp.png",
      type: "Eclairage",
      consumption: 50,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    },
    {
      id: 3,
      name: "SFR box",
      img: "../images/box.png",
      type: "Hifi",
      consumption: 100,
      description: 'Duis elementum imperdiet lectus. In et odio quis magna facilisis fringilla non non lacus. Quisque ornare, quam sit amet ultrices sagittis, velit nunc aliquet mauris, ac vehicula ante mauris quis magna. In egestas vulputate convallis. Aliquam erat volutpat. Vivamus dapibus quis dolor nec sodales. Ut luctus sed ipsum et fermentum.',
    }
  ] 
]

export const roomObjects = (state = initialState[0], action) => {
  switch(action.type) {
    case 'ROOM_CLICKED': return initialState[action.idx];
    default: return state;
  }
}
