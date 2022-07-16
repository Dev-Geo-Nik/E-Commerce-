import { navigate } from "gatsby";
import React from "react";

// Cart 
export const addToCart = (payload:any) =>{
    const isBrowser = typeof window !== "undefined"
    
    if (isBrowser) {
        
      if (!localStorage.getItem("username")) {
        navigate("/app/login");
        return <> </>
      }


      let stringCart :any= localStorage.getItem("cart")
      let cart =  JSON.parse(stringCart);
      cart.push(payload)
      // console.log(cart)

      let total:any  = localStorage.getItem("cartTotalAmount")
      // console.log(total)
      
      let totalAmount
      if (payload.productDiscountPrice) {
         totalAmount = parseInt(total) + parseInt( payload.productDiscountPrice);
      }else{
         totalAmount = parseInt(total) + payload.productPrice;

      }
      localStorage.setItem("cartTotalAmount",JSON.stringify(totalAmount))
      localStorage.setItem("cart", JSON.stringify(cart) )
    }
  
  }


  export const removeProductFromCart = (id:string ,discountPrice:string | null,normalPrice:any) =>{
    const isBrowser = typeof window !== "undefined"
    
    if (isBrowser) {
        
      if (!localStorage.getItem("username")) {
        navigate("/app/login");
        return <> </>
      }

     
      let stringCart :any= localStorage.getItem("cart")
      let cart =  JSON.parse(stringCart);
      
      const indexOfObject = cart.findIndex((product:any) => {
        return product.uniqid === id;
      });
  
      cart.splice(indexOfObject,1)
      // console.log(cart)
      
      // console.log(cart)

      let total:any  = localStorage.getItem("cartTotalAmount")
      // console.log(total)
      
      let totalAmount

      if (discountPrice) {
         totalAmount = parseInt(total) - parseInt( discountPrice);
      }else{
         totalAmount = parseInt(total) - normalPrice;

      }

      localStorage.setItem("cartTotalAmount",JSON.stringify(totalAmount))
      localStorage.setItem("cart", JSON.stringify(cart) )
    }
  
  

}

export const displayCart = () =>{
    const isBrowser = typeof window !== "undefined"
    let cartData ;
    if (isBrowser) {
        
        let stringCart :any= localStorage.getItem("cart")
        let cart =  JSON.parse(stringCart);
        // console.log(cart)
        cartData = cart
      }
      return cartData
}


export const displayTotalCartAmount = ()=>{
  const isBrowser = typeof window !== "undefined"
  let cartAmount ;
  if (isBrowser) {
      
      let stringTotalAmount :any= localStorage.getItem("cartTotalAmount")
      let total =  JSON.parse(stringTotalAmount);
      // console.log(cart)
      cartAmount = total
    }
    return cartAmount
}


