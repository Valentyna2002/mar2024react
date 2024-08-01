import React from 'react';
import {useForm} from "react-hook-form";
import {UserModels} from "../models/UserModels";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {authService} from "../services/api.services";


const AuthFormComponent = () => {
    let {
        handleSubmit,
        register
    } = useForm<TokenObtainPairModel>({
        defaultValues: {
            username: 'Valia2002',
            password: 'Valia2002.',
        }
    });
    let authenticate = (data: TokenObtainPairModel) => {
        authService.authentificate(data);
    };
    return (
        <div>

            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>auth me</button>
            </form>


        </div>
    )
        ;
};

export default AuthFormComponent;