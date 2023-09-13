/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { UserContext } from "../interfaces/interfaces";
//import Cookies from 'js-cookie';


const defaultValues = {
  loginVisibility: false,
  setLoginVisibility: () => { },
  signUpVisibility: false,
  setSignUpVisibility: () => { },
  isLoggedIn: false,
  setIsLoggedIn: () => { },
  login: async (mail: string, pass: string) => { },
  signUp: async (uname: string, mail: string, pass: string) => { },
  logOut: async () => { },
  checkLoginStatus: async () => { }
}

export const UserContextValues = createContext<UserContext>(defaultValues)
export const useSocket = () => useContext(UserContextValues)

function UserProvider({ children }: PropsWithChildren) {
  const [loginVisibility, setLoginVisibility] = useState<boolean>(false)
  const [signUpVisibility, setSignUpVisibility] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)


  // #LOG IN FUNCTION THAT TAKES IN 2 STRINGS FROM COMPONENT LOGINFORM
  const login = async (mail: string, pass: string) => {
    try {
      const res = await fetch('/api/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: mail,
            password: pass
          })
        })
      if (res.ok) {
        // Handle successful login here, e.g., set isLoggedIn to true
        setIsLoggedIn(true);

        loginVisibility ? setLoginVisibility(false) : null
        signUpVisibility ? setSignUpVisibility(false) : null

        const data = await res.json()
        localStorage.setItem('user',(JSON.stringify(data.userObject)))
        console.log(data, ' has logged in');

      } else {
        // Handle login error, e.g., show an error message
        alert('incorrect mail or password');
      }
    } catch (error) {
      console.log('loginFailed');

    }
  }

  const signUp = async (uname: string, mail: string, pass: string) => {
    try {
      const res = await fetch('/api/users/sign-up',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: mail,
            password: pass,
            description: uname
          })
        })
      if (res.ok) {
        // Handle successful login here, e.g., set isLoggedIn to true
        console.log('customer ', mail, ' has been created');

        loginVisibility ? setLoginVisibility(false) : null
        signUpVisibility ? setSignUpVisibility(false) : null
        login(mail, pass)

      } else {
        // Handle login error, e.g., show an error message
        alert('missing a field');
      }
    } catch (error) {
      console.log('Sign up failed');
    }
  }

  const logOut = async () => {
    try {
      const res = await fetch('api/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      })

      const data = await res.json()
      console.log(data);
      localStorage.removeItem('user')
      setIsLoggedIn(false)
    } catch (error) {
      console.log(error);

    }
  }

  const checkLoginStatus = async () => {
    try {
    const res = await fetch('api/users/authorize')
    const data = await res.json()
    if (res.ok) {
      setIsLoggedIn(true)
      !localStorage.getItem('user') ? localStorage.setItem('user', data) : null
    }
  } catch (error) {
      return 
  }
  }


  return (
    <UserContextValues.Provider value={{
      loginVisibility,
      setLoginVisibility,
      signUpVisibility,
      setSignUpVisibility,
      isLoggedIn,
      setIsLoggedIn,
      login,
      signUp,
      logOut,
      checkLoginStatus
    }}>
      {children}
    </UserContextValues.Provider>
  )
}

export default UserProvider