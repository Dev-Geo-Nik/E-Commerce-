
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
  username:yup.string().min(2 ,"Username must be at least 2 characters").required("Username is required"),
  email:yup.string().email("Please insert a valid email address").required("Email is required"),
  password:yup.string().min(6 ,"Password must be at least 6 characters").required("Password is required"),
  question:yup.string().required("Question is required"),
  

})

export const loginUserSchema = yup.object().shape({
  username:yup.string().min(2 ,"Username is required").required("Username is required"),
  password:yup.string().min(6 ,"Password is required").required("Password is required"),
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





export const fetchAllFavorites = async(userJWT:string) =>{
  let favoritesData = null
  let favoritesErrors = null
  const request = {
   
    headers: {
     
   
      Authorization: `Bearer ${userJWT}`,
    },
   
    }
 
  try {
      const res = await  fetch("http://localhost:1340/api/favorites",request);
      favoritesData = await res.json();
     

    } catch (error) {
      favoritesErrors = error
    }

return [favoritesData,favoritesErrors]

}


export const deleteFavorite =  async(user:string | null,username:string  |null ,gameId:string,platform:string,setIsFavored:any) =>{
  let payloadData = null
  let  payloadError = null

  const payload ={
    dataPayload:{
      username: username,
      productId:gameId,
      platform:platform
    }
 }

   const request = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
    
       Authorization: `Bearer ${user}`,
     },
     body: JSON.stringify(
      {payload}
    )
   
 
     }
  
   try {
       const res = await  fetch("http://localhost:1340/api/delete-favorite",request);
       const data = await res.json();
       payloadData = data;
       if(data){

        setIsFavored(false)
      }
      //  console.log("DELETING DATA " ,data)
   } catch (error) {
    payloadError= error
   }

  return [payloadData,payloadError]
 }



 export const AddToFavorites =  async(user:string | null,username:string  |null ,gameId:string,platform:string,setIsFavored:any) =>{
  let payloadData = null
  let  payloadError = null

 const payload ={
    dataPayload:{
      username: username,
      productId:gameId.toString(),
      platform:platform
    }
 }

  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
   
      Authorization: `Bearer ${user}`,
    },
    body: JSON.stringify(
      {payload}
    )
    }
 
  try {
      const res = await  fetch("http://localhost:1340/api/add-favorite",request);
      const data = await res.json();
      payloadData = data
      setIsFavored(true)
  } catch (error) {
        payloadData = error
  }
  return [payloadData,payloadError]
}

export const isFavoredCheckFun  =async(user:string | null,username:string  |null ,gameId:string,platform:string,setIsFavored:any)=>{
  // console.log("useEffect IS FAVORED?")
  const payload ={
    dataPayload:{
      username: username,
      productId:gameId,
      platform:platform
    }
 }
    const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      
          Authorization: `Bearer ${user}`,
        },
        body: JSON.stringify({payload})
     
      
        }


  try {
    const res = await  fetch(`http://localhost:1340/api/find-favorite`,request);
    const resData = await res.json();

  

    if ((resData.username)) {
      // console.log(resData.username)
      setIsFavored(true)
    }
  } catch (error) {
    console.log(error)
    setIsFavored(false)
  }

}


