import React, {createContext, useContext, useState} from 'react';
import './App.css';
import MainComponent from "./components/mainComponent";
import Incrementor from "./components/incrementor";
import Decrementor from "./components/decrementor";
import {create} from "zustand";


type StoreType={
  counter:number;
  inc:()=>void;
  dec:()=>void
}
// let defaultValue={
//   counter:0,
//   inc:()=>{},
//   dec:()=>{}
// }
export let useStore =create<StoreType>((set)=>({
    counter:0,
    inc:()=>{
        set((state)=>({counter:state.counter+1}))
    },
    dec:()=>{
        set((state)=>({counter:state.counter-1}))
    }
}))
// let MyContext =createContext<StoreType>(defaultValue)
// export const useAppContext = ():StoreType=>useContext(MyContext)
const App = () => {

  // const [globalCounter, setGlobalCounter] = useState<number>(0)
  return (
      <div>
        {/*<MyContext.Provider value={{*/}
        {/*  counter:globalCounter,*/}
        {/*  inc:()=>{*/}
        {/*    setGlobalCounter(prevState => ++prevState)*/}
        {/*},*/}
        {/*   dec:()=>{*/}
        {/*    setGlobalCounter(prevState => --prevState)*/}
        {/*   }*/}
        {/*}}>*/}



        <MainComponent/>
        <Incrementor/>
        <Decrementor/>
        {/*</MyContext.Provider>*/}
      </div>
  );
}

export default App;
