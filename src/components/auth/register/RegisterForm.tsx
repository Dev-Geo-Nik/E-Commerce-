import React, { useState } from 'react';
import * as styles from "./registerForm.module.scss";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { getRandomNumberBetween, registerUserSchema } from '../../../util/helpers';
import RegisterSuccess from './RegisterSuccess';
import { useGameContext } from '../../../context/game/GameContext';
import Spinner from '../../spinner/Spinner';
import { ActionTypes } from '../../../context/Constants';
import { useSpring ,animated as a} from 'react-spring';

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

  const {state:{isLoading},dispatch}  = useGameContext();
  const [success,setSuccess] = useState(false);
  const  [isError,setIsError] = useState(false)
  const  [errorMessage,setErrorMessage] = useState("")
  const [questionError, setQuestionError] = useState("")
  const [shakeError ,setShakeError] = useState(false);


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

    
  const { x } = useSpring({
    from: { x:0},
    to: { x:  shakeError ? 1 : 0},
  
    
  });

  // if(Object.keys(errors).length > 0){
  //   // console.log("in")
  
  //   setTimeout(() => {
  //     setShakeError(true);
      
  //   }, 100);
    

  // }


    const onSubmit = (formData: RegisterUser) => {
 
   
      const postData = async()=>{
      
        if (+formData.question != total) {
          setQuestionError("Answer is incorrect, please try again");
          setShakeError(true);
          return;
        }
        setShakeError(false)
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

            dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:true})

            const res = await fetch("http://localhost:1340/api/auth/local/register",request)
            const data = await res.json();
          

            if (data.user) {
              // console.log(data.jwt)
              // console.log(data.user)
              dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:false})
          
              setSuccess(true)
              setErrorMessage("")
           }      
         
          if (data.error) {
                dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:false})
                let message = data.error.message.includes("Email") ? data.error.message :"Username is already taken"
                setIsError(true)
                setErrorMessage(message)
          
            }


            
          } catch (err:any) {
              setIsError(true)
              setTimeout(() => {
                setShakeError(true);
                
              }, 100);
              
              setErrorMessage(err.message)
              dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:false})
            
          }    
    
}

postData()

};

  
    

  return (


<a.div className={styles.formWrapper}
style={{
  transform: x
    .to({
      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
      output: [180, 220, 180, 220, 180, 220, 180, 200]
    })
    .to(x => `translate3d(${x}px, 0px, 0px)`)

}}

>
    {isError && <p className={styles.errorsMessageText}>{errorMessage}</p>}

  
   { success ? 
   <RegisterSuccess/>:

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

      <button className="btn-cta" type="submit">Sign Up</button>
    </form> 
    } 

</a.div>


);
};

export default RegisterForm;

