import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../layout/Navbar';

interface Props {
   path: string;
}


const  Login :React.FC<Props> =  () => {
  const [formData,setFormData] = useState({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      console.log("from has been submitted!")

    const res = await  fetch("https://hotburger-app.herokuapp.com/api/auth/local",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })


      const loginUser = await res.json()
      console.log(loginUser)
      // !save the user to context, need to create types.
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
     
    setFormData({
      ...formData,
      [e.currentTarget.name] : e.currentTarget.value
    })
      
  }

  console.log(formData)
  return (
<Wrapper>
    <div className="grid-container">
      <Navbar/>
      <form onSubmit={((e)=>handleSubmit(e))} >
        <input type="text" placeholder="Username"  name="identifier" onChange={(e)=>handleChange(e)} />
        <input type="password" placeholder="Password"  name="password" onChange={(e)=>handleChange(e)} />
       <button type="submit" >Login</button>
      </form>
    
  </div>
</Wrapper>
);
};

export default Login;


const Wrapper = styled.section`
  position: relative;
  background-color:var(--clr-background-1);
  color:var(--clr-title-1);
  height: 100vh;
 
    

  .grid-container{
      display:  grid;
      grid-template-columns: [full-start] minmax(14rem ,auto)  [col-start] repeat(12, minmax(min-content, 12rem)) minmax(14rem ,auto) [full-end];
      grid-column-gap: 3rem;
  }


  form{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content:center;
    align-items: center;
    flex-flow: column;
  }

  button{
    display: block;
  }

`