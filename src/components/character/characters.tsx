import React, {FC} from "react";
import {ICharacters} from "../../models/iCharacters";
import styles from "./character.module.css"

type IProps = {
    characters:ICharacters;
}

 const Characters:FC<IProps> = ({characters})=>{
    const {age,info,name,surname, photo}=characters
    console.log(characters);
    return( <div>
        <h2 className={styles.title}>{name}{surname}</h2>
        <img src={photo} alt={name} className={styles.image}/>
        <p className={styles.text}>{info}</p>
    </div>)
}

export default Characters