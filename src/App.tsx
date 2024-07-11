import React, {useCallback, useState} from 'react';
import './App.css';
import UserComponent from "./component/userComponent";



const App = () => {

  return (
      <div>
          <UserComponent id={2}/>
      </div>
  );
}

export default App;
