import { PropsWithChildren, createContext, useContext, useState } from "react";
import { UserContext } from "../interfaces/interfaces";


const defaultValues = {
    loginVisibility: false,
    setLoginVisibility: () => {  },
    signUpVisibility: false,
    setSignUpVisibility: () => {  }
}

export const UserContextValues = createContext<UserContext>(defaultValues)
export const useSocket = () => useContext(UserContextValues)

function UserProvider({ children }: PropsWithChildren) {
    const [loginVisibility, setLoginVisibility] = useState<boolean>(false) 
    const [signUpVisibility, setSignUpVisibility] = useState<boolean>(false) 

  
  return (
    <UserContextValues.Provider value={{
        loginVisibility,
        setLoginVisibility,
        signUpVisibility,
        setSignUpVisibility
        }}>
      {children}
    </UserContextValues.Provider>
  )
}

export default UserProvider