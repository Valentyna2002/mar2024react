import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {UserModels} from "../models/UserModels";
import {userService} from "../services/api.services";


const RegistrationComponent = () => {
    let {handleSubmit, register} = useForm<UserModels>();
    const [isRegistrated, setIsRegistrated] = useState<boolean>(false)


    const onSubmitFormHandler = async (data: UserModels) => {
        let isReg = await userService.saveUser(data);
        setIsRegistrated(isReg);

    }
    return (
        <div>


            <form onSubmit={handleSubmit(onSubmitFormHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>register me</button>
            </form>
            {
                isRegistrated && (<div>you did registration</div>)
            }
        </div>
    );
};

export default RegistrationComponent;