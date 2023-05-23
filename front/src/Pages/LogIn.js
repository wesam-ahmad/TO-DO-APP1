import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'

function LogIn() {
    const [user, setUser] = useState();
    const [accessToken, setAccessToken] = useState();
    const navigate = useNavigate();
    const { auth , setAuth } = useContext(AuthContext);
    useEffect(() => {
        setAccessToken(JSON.parse(localStorage.getItem('token')));
    })
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
    
        // console.log(data);
        axios
          .get("http://localhost:5000/LogIn", {
            headers: {
              'Authorization': `Breaer ${accessToken}`
            }
          })
          .then( (response) => {
           setUser(response.data);
            console.log(user);
            if(user === undefined)
          {  
            setUser(response.data);
            localStorage.removeItem("currentUser", JSON.stringify(user));
        }
        
        else  {localStorage.setItem("currentUser", JSON.stringify(user));
          setAuth(true);
          navigate('/');}
            
          })
          .catch((error) => {
            console.error(error);
          });
    
          
        };
  return (

   <section class="bg-gray-50 dark:bg-gray-900" style={{backgroundImage: "url(https://t4.ftcdn.net/jpg/02/66/97/53/360_F_266975387_CVK7jWI9dSoL4owOzrw9wSElynS7bgRe.jpg)" , backgroundSize: "cover"}}>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to="/SignUp" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default LogIn