import Joi from "joi";
const  postValidator= Joi.object({
    userId:Joi.number().required().positive().integer().messages({
        "number.base": 'ID користувача має бути числом',
        "number.empty": 'введіть ID користувача ',
        "number.positive": 'ID користувача не може бути відємним ',
        "number.integer": 'ID користувача має бути цілим числом'
        }),
    id:Joi.number().required().positive().integer().messages({
        "number.base": 'ID  має бути числом',
        "number.empty": 'введіть ID ',
        "number.positive": 'ID не може бути відємним ',
        "number.integer": 'ID має бути цілим числом'
    }),
    title:Joi.string().required().messages({
        "string.empty": "Title є обов'язковим"
    }),
    body:Joi.string().required().messages({
        "string.empty": "Body посту є обов'язковим"
    }),
})

export default postValidator