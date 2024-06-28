import React, {FC} from 'react';
import './App.css';
import {ICharacters} from "./models/iCharacters";
import {simpsons} from "./data";
import Characters from "./components/character/characters";



const App = () => {
    
  return(
      <div>
        {simpsons.map((characters:ICharacters) =>
            <Characters characters={characters}></Characters>)}
    </div>);
}

export default App;
