import React, { useState } from 'react';
import * as styles from "./registerForm.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { getRandomNumberBetween, registerUserSchema } from '../../../util/helpers';
import Spinner  from "../../../assets/images/spinner.gif"

type RegisterUser  = { 
    username:string,
    email:string,
    password:string,
    question:string,
  
}

const value1 = getRandomNumberBetween(1,5)
const value2 = getRandomNumberBetween(1,5)
const total = value1 + value2

const  RegisterForm :React.FC = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [response ,setResponse] = useState({
    success:false,
    message:""
  })


    const [questionError, setQuestionError] = useState("")

    const {
      register,
      handleSubmit,
      reset,
      getFieldState,
      getValues,
      setError,
      watch,
      formState: { errors }
    } = useForm<RegisterUser>({
      resolver: yupResolver(registerUserSchema)
    });


    const onSubmit = (formData: RegisterUser) => {
      console.log("in")
   
      const postData = async()=>{
      
        if (+formData.question != total) {
          setQuestionError("Answer is incorrect, please try again");
          return;
        }
       
        const registerUserPayload ={
            username:formData.username,
            email:formData.email,
            password:formData.password
         
        }

        const request = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            registerUserPayload
          )
        }

          try {
            console.log("Trying to create new user")
            const res = await fetch("http://localhost:1340/api/auth/local/register",request)
            const data = await res.json();
          
            if (data) {
              console.log(data)
                setResponse({
                  success: data.success,
                  message:data.message
                })
              console.log(data)
            }
            
          } catch (error) {
              console.log(error)
          }    
    
}

postData()

};

  return (
<div className={styles.container}>
  {isLoading && 
  <div className="modal">
      <img src={Spinner} alt=" indicating loading image"  className={styles.spinnerImage}/>
  </div>    }
  

  <form onSubmit={handleSubmit(onSubmit)} className="form">
    <label htmlFor="Userusername">Username*</label>
    <input type="text"  {...register('username')}  className={` ${errors.username ? 'is-invalid' : ''}`}  />
    {errors.username  ? <p className={styles.errorText}>{errors.username.message}</p>   :  <p className={styles.errorGhost}>No Error</p>}
 


    <label htmlFor="Email">Email*</label>
    <input  type="email"  {...register('email')}  className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
    {errors.email  ? <p className={styles.errorText}>{errors.email.message}</p>   :  <p className={styles.errorGhost}>No Error</p>}  
    
    <label htmlFor="Password">Password*</label>
    <input type="password"  {...register('password')}  className={` ${errors.password ? 'is-invalid' : ''}`}  />
    {errors.username  ? <p className={styles.errorText}>{errors.password?.message}</p>   :  <p className={styles.errorGhost}>No Error</p>}

    <label htmlFor="question">What is {value1} + {value2}?*</label>
    <input  type="text"  {...register('question')}  className={`form-control ${errors.question ? 'is-invalid' : ''}`}/>
    {errors.question  ? <p className={styles.errorText}>{errors.question.message}</p>   : questionError  ? <p className={styles.errorText}>{questionError}</p>  : <p className={styles.errorGhost}>No Error</p>}  

    <button className="btn-cta" type="submit">Send message</button>
  </form>

</div>
);
};

export default RegisterForm;

