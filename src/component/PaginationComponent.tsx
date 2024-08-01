import React from 'react';
import {CarPaginatedModel} from "../models/CarPaginatedModel";
import {useSearchParams} from "react-router-dom";
import {PaginatedPageModel} from "../models/PaginatedPageModel";

interface IProps{
    next:null | PaginatedPageModel;
    prev:null | PaginatedPageModel;
}

const PaginationComponent:React.FC<IProps>= ({next,prev}) => {
let[query,setQuery]=useSearchParams({page:'1'})

    const changePage = (nextOrPrev:string)=>{
    switch (nextOrPrev){
        case'next':
            setQuery({...next});
             break;
        case 'prev':
            setQuery({...prev});
        break;
    }
    }
    return (
        <div>
            <button
                disabled={!prev}
                onClick={()=>{changePage('prev')}}> prev   </button>
            <button
                disabled={!next}
                onClick={()=>{changePage('next')}}> next   </button>
        </div>
    );
};

export default PaginationComponent;