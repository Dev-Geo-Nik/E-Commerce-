
import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name:yup.string().min(2 ,"Name must be at least 2 characters").required("Name is required"),
  // email:yup.string().email("Please insert a valid email address").required("Email is required"),
  city:yup.string().min(2 ,"City must be at least 2 characters").required("City is required"),
  address:yup.string().min(2 ,"Please enter a valid address").required("Address is required"),
  postCode:yup.number().min(2,"Post code must be at least 4  digits").required("Post Code must be numbers"),
  phoneNumber:yup.number().min(2,"Please enter a valid phone number").required("Phone number is required"),
  textarea:yup.string()
})

export const contactFormSchema = yup.object().shape({
  name:yup.string().min(2 ,"Name must be at least 2 characters").required("Name is required"),
  email:yup.string().email("Please insert a valid email address").required("Email is required"),
  textarea:yup.string().required("Message is required"),
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


export const  findCategoryHelper = (categoryName:string)=>{

  switch (categoryName) {
    case"Signature Burgers":
       return "beef-burger"

    case"Chicken Burgers":
       return  "chicken-burger"
       
    case"Turkey Burgers":
       return "turkey-burger"
       
    case"Black Bean Burgers":
       return "bean-burger"
       
    case"Kids Meals":
       return 'kid-menu'

    case"Shakes & Desserts":
       return "dessert"

    case"Fries & Sides":
       return "fries"

    case"Salads":
       return "salad"

    case"Beverages":
       return "Beverages"
      
  
    default:
      null;
  }

}