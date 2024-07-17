import React, { PropsWithChildren} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import PostValidator from "../validator/post.validator";
import {FC} from "react";
import {IPosts} from "../model/IPosts";
import {ISetState} from "../model/postsType";



interface IProps extends PropsWithChildren{
    setTrigger:ISetState<boolean>,
    setNewPost: ISetState<IPosts | null>
}
const FormComponent:FC<IProps>= ({setTrigger,setNewPost}) => {
    let {
        formState:{errors,isValid},
        register,handleSubmit,reset}=
        useForm<IPosts>({resolver:joiResolver(PostValidator)
    })


     const onSubmit : SubmitHandler<IPosts> = async (data) =>{
         const response=await fetch('https://jsonplaceholder.typicode.com/posts', {
             method: 'POST',
             body: JSON.stringify(data),
             headers: {
                 'Content-type': 'application/json; charset=UTF-8',
             },
         })
         const newPost = await response.json();
         console.log(newPost);

         setNewPost(newPost);

         setTrigger(prevState => !prevState)
          reset()

     }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="number" placeholder={'UserId'} {...register('userId')} />
                <input type="number" placeholder={'Id'}{...register('id')} />
                <input type="text" placeholder={'Title'}{...register('title')}  />
                <input type="text" placeholder={'body'}{...register('body',)} />
                <button>send</button>
            </form>

        </div>
    );
};

export default FormComponent;