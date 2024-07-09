import {useState} from "react";

export const useToggle = (initValue:boolean) =>{
    const [toggle, setToogle] = useState<boolean>(initValue)
    const handleToggle = () => setToogle(prevState => !prevState)
    return[toggle,handleToggle] as const;
}

