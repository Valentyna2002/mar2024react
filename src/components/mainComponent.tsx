import React, {useContext} from 'react';
import { useStore} from "../App";

const MainComponent = () => {
   let {counter} =useStore()
    return (
        <div>
         counter is:{counter}
        </div>
    );
};

export default MainComponent;