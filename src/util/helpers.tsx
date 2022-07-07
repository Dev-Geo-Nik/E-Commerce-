
import * as yup from 'yup';
import { PlaystationGameStatus } from '../context/Constants';

export const validationSchema = yup.object().shape({
  name:yup.string().min(2 ,"Name must be at least 2 characters").required("Name is required"),
  // email:yup.string().email("Please insert a valid email address").required("Email is required"),
  city:yup.string().min(2 ,"City must be at least 2 characters").required("City is required"),
  address:yup.string().min(2 ,"Please enter a valid address").required("Address is required"),
  postCode:yup.number().min(2,"Post code must be at least 4  digits").required("Post Code must be numbers"),
  phoneNumber:yup.number().min(2,"Please enter a valid phone number").required("Phone number is required"),
  textarea:yup.string()
})

export const registerUserSchema = yup.object().shape({
  username:yup.string().min(2 ,"Name must be at least 2 characters").required("Name is required"),
  email:yup.string().email("Please insert a valid email address").required("Email is required"),
  password:yup.string().min(6 ,"Password must be at least 2 characters").required("Password is required"),
  question:yup.string().required("Question is required"),
  

})

export const loginUserSchema = yup.object().shape({
  username:yup.string().min(2 ,"Name must be at least 2 characters").required("Name is required"),
  password:yup.string().min(6 ,"Password must be at least 2 characters").required("Password is required"),
  question:yup.string().required("Question is required"),
  

})

export const oderIdSchema =  yup.object().shape({

  orderId: yup.string().required("Order ID is required"),
  question:yup.string().required("Question is required")
})
  




export const asyncFetchFun = async(promise:any) =>{
  try {
    const res = await promise
    const data = await res.json();
    return [data,null]
  } catch (error) {
    console.log(error)
    return [null,error]
  }
}

// Example

// const promise = fetch("",{})
// async function main (){
//   const [data,error] = await asyncFetchFun(promise)
// }


export function getRandomNumberBetween(min:number,max:number){
  return Math.floor(Math.random()*(max-min+1)+min);
}




// export const  findCurrentStatus = (status:string)=>{

//   switch (status) {
//     case PlaystationGameStatus.BEST_SELLER:
//        return PlaystationGameStatus.BEST_SELLER

//     case PlaystationGameStatus.HOT:
//        return PlaystationGameStatus.HOT
       
//     case PlaystationGameStatus.NEW:
//        return PlaystationGameStatus.NEW
       
//     case  PlaystationGameStatus.ON_SALE:
//        return PlaystationGameStatus.ON_SALE;
       
//     case  PlaystationGameStatus.PRE_ORDER:
//        return  PlaystationGameStatus.PRE_ORDER

//     case PlaystationGameStatus.TRENDING:
//        return  PlaystationGameStatus.TRENDING

  
//     default:
//       null;
//   }

// }