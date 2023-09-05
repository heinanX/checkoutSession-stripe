import { PropsWithChildren, createContext, useContext, useState } from "react";

export interface User {
  username: string,
  password: string,
  email: string,
}

export interface UserContext {
    loginVisibility: boolean
    setLoginVisibility: React.Dispatch<React.SetStateAction<boolean>>
    signUpVisibility: boolean
    setSignUpVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

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