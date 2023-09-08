import { PropsWithChildren, createContext, useContext, useState } from "react";
import { UserContext } from "../interfaces/interfaces";


const defaultValues = {
  loginVisibility: false,
  setLoginVisibility: () => { },
  signUpVisibility: false,
  setSignUpVisibility: () => { },
  isLoggedIn: false,
  setIsLoggedIn: () => {  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: async (mail: string, pass: string) => {}
}

export const UserContextValues = createContext<UserContext>(defaultValues)
export const useSocket = () => useContext(UserContextValues)

function UserProvider({ children }: PropsWithChildren) {
  const [loginVisibility, setLoginVisibility] = useState<boolean>(false)
  const [signUpVisibility, setSignUpVisibility] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const login = async ( mail: string, pass: string) => {
    try {
    
    const res = await fetch('http://localhost:3000/api/users/login',
    {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: mail,
        pass: pass 
      })
    })
    if (res.ok) {
      // Handle successful login here, e.g., set isLoggedIn to true
      console.log(mail, ' has logged in');
      setIsLoggedIn(true);
      loginVisibility ? setLoginVisibility(false) : null
      signUpVisibility ? setSignUpVisibility(false) : null

    }
  } catch (error) {
    alert('incorrect mail or password');
      
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
      login
    }}>
      {children}
    </UserContextValues.Provider>
  )
}

export default UserProvider