import { createContext, useContext, useState } from "react"
import Cookies from 'js-cookie'

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const intialUserState = Cookies.get('jwt') || localStorage.getItem("ChatApp")

    //Parse the User data and storing in state
    const [authUser, setAuthUser] = useState(
        intialUserState ? JSON.parse(intialUserState) : undefined
    )
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)