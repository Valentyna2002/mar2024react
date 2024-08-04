import React from 'react';
import { useStore} from "../App";

const Decrementor = () => {
   let {dec}= useStore()
    return (
        <div>
            <button onClick={dec}>decrement</button>
        </div>
    );
};

export default Decrementor;