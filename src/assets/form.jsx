import { useState } from "react";

function Form(){
      const [formData,setFormData]=useState({
            
            email:"",
            password:"",
            confirmPassword:"",
            newsLetter:true
      })

      function handleChange(event){
           
          const {name,value,type,checked}=event.target

               setFormData(prevFormData=>{
                   return{
                        ...prevFormData,
                        [name]: type === "checkbox" ? checked : value
                   }
               })
      }

      function handleSubmit(event){
               event.preventDefault()
                if (formData.email === "" || formData.password === "" || formData.confirmPassword === ""){
                 console.log("please fill up everything")
                } else{
               if(password.value === confirmPassword.value){
                console.log('successfully logged in')
               }else{
                console.log("password doesn't match")
               }
               if(newsLetter.checked){
                console.log('Thanks for Signing up for our newsletter')
               }
            }
      }


      return(
        <form onSubmit={handleSubmit}>
              <input 
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
             />

             <input 
                   type="password" 
                   name="password" 
                   id="password"
                   placeholder="Password"
                   value={formData.password}
                   onChange={handleChange}
             />

             <input 
                   type="password" 
                   name="confirmPassword" 
                   id="confirmPassword"
                   placeholder="Confirm Password"
                   value={formData.confirmPassword}
                   onChange={handleChange}
             />
              <div className="checkbox__container">
                    <input 
                          type="checkbox" 
                          name="newsLetter" 
                          id="newsLetter"
                          checked={formData.newsLetter}
                          onChange={handleChange}
                    />
                    <label htmlFor="newsLetter">I want to join the newsletter</label>
              </div>

              <button>Sign Up</button>
             

        </form>
      )
}

export default Form