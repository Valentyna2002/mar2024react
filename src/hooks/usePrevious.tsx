import {useRef} from "react";

export const usePrevious = (value:number)=> {
    const currentValue = useRef<number>(value);
    const prevValue = useRef<number>();
    if(currentValue.current !== value){
        prevValue.current = currentValue.current;
        currentValue.current = value;
    }
    return [currentValue.current, prevValue.current]
}