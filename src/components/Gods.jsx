import React, { useState } from "react";
import God from "./God";
import "./Gods.css";

const GODS_DATA = [
  {
    name: "Vishnu",
    email: "vishnu@divine.com",
    dialogue: "I am the preserver of the universe, always watching over you.",
  },
  {
    name: "Shiva",
    email: "shiva@cosmic.com",
    dialogue: "I am the destroyer of ignorance and the transformer of souls.",
  },
  {
    name: "Brahma",
    email: "brahma@creation.com",
    dialogue: "I am the creator of all life and the cosmic architect.",
  },
  {
    name: "Lakshmi",
    email: "lakshmi@prosperity.com",
    dialogue: "I bring wealth, prosperity, and good fortune to all.",
  },
  {
    name: "Saraswati",
    email: "saraswati@wisdom.com",
    dialogue: "I am the goddess of knowledge, music, and the arts.",
  },
  {
    name: "Durga",
    email: "durga@strength.com",
    dialogue:
      "I am the fierce protector and the embodiment of divine strength.",
  },
  {
    name: "Ganesh",
    email: "ganesh@removerofobstacles.com",
    dialogue:
      "I am the remover of obstacles and the harbinger of new beginnings.",
  },
  {
    name: "Hanuman",
    email: "hanuman@devotion.com",
    dialogue: "I am the symbol of unwavering devotion and strength.",
  },
  {
    name: "Krishna",
    email: "krishna@playful.com",
    dialogue: "I am the playful god of love and divine joy.",
  },
  {
    name: "Rama",
    email: "rama@heroic.com",
    dialogue: "I am the ideal king and the hero of righteousness.",
  },
  {
    name: "Parvati",
    email: "parvati@love.com",
    dialogue: "I am the goddess of love, fertility, and devotion.",
  },
  {
    name: "Ganesha",
    email: "ganesha@wisdom.com",
    dialogue:
      "I am the embodiment of wisdom and the beloved son of Shiva and Parvati.",
  },
  {
    name: "Kartikeya",
    email: "kartikeya@warrior.com",
    dialogue:
      "I am the god of war and victory, leading with valor and courage.",
  },
  {
    name: "Indra",
    email: "indra@thunder.com",
    dialogue: "I am the king of the heavens and the god of thunder and rain.",
  },
  {
    name: "Agni",
    email: "agni@fire.com",
    dialogue: "I am the god of fire, essential for purification and sacrifice.",
  },
  {
    name: "Varuna",
    email: "varuna@ocean.com",
    dialogue: "I am the god of the oceans and the upholder of cosmic law.",
  },
  {
    name: "Yama",
    email: "yama@justice.com",
    dialogue:
      "I am the lord of death and the enforcer of justice and morality.",
  },
  {
    name: "Kubera",
    email: "kubera@wealth.com",
    dialogue: "I am the god of wealth and the guardian of treasures.",
  },
  {
    name: "Rama",
    email: "rama@king.com",
    dialogue: "I am the prince of Ayodhya and the epitome of dharma.",
  },
  {
    name: "Sita",
    email: "sita@virtue.com",
    dialogue: "I am the embodiment of virtue and the devoted wife of Rama.",
  },
  {
    name: "Radha",
    email: "radha@love.com",
    dialogue: "I am the eternal beloved of Krishna, symbolizing divine love.",
  },
  {
    name: "Bhairav",
    email: "bhairav@fearless.com",
    dialogue:
      "I am the fierce and protective form of Shiva, safeguarding the universe.",
  },
];

class Gods extends React.Component {
  constructor() {
    super();
    this.state = {
      gods: GODS_DATA,
    };
  }
  render() {
    return (
      <div className="gods-container">
        {this.gods &&
          this.gods.map(({ name, email, dialogue }, key) => (
            <God key={key} name={name} email={email} dialogue={dialogue} />
          ))}
      </div>
    );
  }
}

/*
const Gods = () => {
  const [gods, setGods] = useState(GODS_DATA);

  return (
    <div className="gods-container">
      {gods &&
        gods.map(({ name, email, dialogue }, key) => (
          <God key={key} name={name} email={email} dialogue={dialogue} />
        ))}
    </div>
  );
};
*/

export default Gods;
