import { yupResolver } from '@hookform/resolvers/yup';
import { navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActionTypes } from '../../../context/Constants';
import { useGameContext } from '../../../context/game/GameContext';
import {  getRandomNumberBetween, loginUserSchema } from '../../../util/helpers';
import  * as styles from './loginForm.module.scss';
import {useSpring , animated as a } from "react-spring";


type LoginUser  = { 
  username:string,
  password:string,
  question:string,

}
const value1 = getRandomNumberBetween(1,5)
const value2 = getRandomNumberBetween(1,5)

const total = value1 + value2

const  LoginForm :React.FC = () => {
  const {dispatch} = useGameContext()

  const [questionError, setQuestionError] = useState("")
  const  [isError,setIsError] = useState(false)
  const  [errorMessage,setErrorMessage] = useState("")
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
  } = useForm<LoginUser>({
    resolver: yupResolver(loginUserSchema)
  });


  // useEffect(()=>{

  // },[shakeError])

  const { x } = useSpring({
    from: { x:0},
    to: { x:  shakeError ? 1 : 0},
  
    
  });

  if(Object.keys(errors).length > 0){
    // console.log("in")
  
    setTimeout(() => {
      setShakeError(true);
      
    }, 100);
    

  }

  const onSubmit = (formData: LoginUser) => {
 
   
    const postData = async()=>{
    
      if (+formData.question != total) {
        setQuestionError("Answer is incorrect, please try again");
        setShakeError(true);
        return;
      }
      setShakeError(false)
      const loginUserPayload ={
          identifier:formData.username,
          password:formData.password
       
      }

      const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          loginUserPayload
        )
      }

        try {

          dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:true})

          const res = await fetch("http://localhost:1340/api/auth/local",request)
          const userData = await res.json();
      

          if (userData.user) {

            dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:false})
            setErrorMessage("")
            // dispatch({type:ActionTypes.LOGIN_USER,payload:userData.jwt})
            const cart:any = [];

            localStorage.setItem("cart",JSON.stringify(cart))
            localStorage.setItem("cartTotalAmount","0")
            window.localStorage.setItem("userJWT",userData.jwt)
            window.localStorage.setItem("username",userData.user.username)
            
            // dispatch({type:ActionTypes.INITIALIZE_CART ,payload:  localStorage.getItem("cart")})
            navigate("/app/playstation")
            
         }      
       
        if (userData.error) {
              dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:false})
            
              setIsError(true)
              setTimeout(() => {
                setShakeError(true);
                
              }, 100);
              
              setErrorMessage("Invalid username or password ")
        
          }


          
        } catch (err:any) {
            // setIsError(true)
            // setErrorMessage(err.message)
            // dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:false})
          
        }    
  
}

postData()

};
  return (
<a.div  className={styles.formWrapper} 
  style={{
    transform: x
      .to({
        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
        output: [180, 220, 180, 220, 180, 220, 180, 200]
      })
      .to(x => `translate3d(${x}px, -120px, 0px)`)

}}
>
{isError && <p className={styles.errorsMessageText}>{errorMessage}</p>}
 <form onSubmit={handleSubmit(onSubmit)} className="form" >
      <label htmlFor="Userusername">Username*</label>
      <input type="text"  {...register('username')}  className={` ${errors.username ? 'is-invalid' : ''}`}  />
      {errors.username  ? <p className={styles.errorText}>{errors.username.message}</p>   :  <p className={styles.errorGhost}>No Error</p>}

      {/* <label htmlFor="Email">Email*</label>
      <input  type="email"  {...register('email')}  className={`form-control ${errors.email ? 'is-invalid' : ''}`}/>
      {errors.email  ? <p className={styles.errorText}>{errors.email.message}</p>   :  <p className={styles.errorGhost}>No Error</p>}   */}
      
      <label htmlFor="Password">Password*</label>
      <input type="password"  {...register('password')}  className={` ${errors.password ? 'is-invalid' : ''}`}  />
      {errors.username  ? <p className={styles.errorText}>{errors.password?.message}</p>   :  <p className={styles.errorGhost}>No Error</p>}

      <label htmlFor="question">What is {value1} + {value2}?*</label>
      <input  type="text"  {...register('question')}  className={`form-control ${errors.question ? 'is-invalid' : ''}`}/>
      {errors.question  ? <p className={styles.errorText}>{errors.question.message}</p>   : questionError  ? <p className={styles.errorText}>{questionError}</p>  : <p className={styles.errorGhost}>No Error</p>}  

      <button className="btn-cta" type="submit">Sign In</button>
    </form> 
</a.div>
);
};

export default LoginForm;

