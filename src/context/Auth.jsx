import { createContext, useContext, useEffect, useState } from "react"

const Auth = createContext()
const initialState = { isAuth: false, user: {} }

const AuthContext = ({ children }) => {
    // const [isAuth,setIsAuth] = useState(false) // no need here this & bottom line
    // const [user,setUser] = useState({})
    const [state, setState] = useState(initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    const readProfile = () => {
        const user = { uid: '123', email: 'shakil@gmail.com', name: "Kashif Shahzad" }
        // setState({ isAuth: true, user })
        setTimeout(()=>{
            setIsAppLoading(false)
        }, 2000)
    }
    useEffect(() => { readProfile() },[])
    const handleLogout = () => {
        setState(initialState)
    }

    return (
        // <Auth.Provider value={{isAuth: state.isAuth, user: state.user,isAppLoading }}>
        <Auth.Provider value={{ ...state, isAppLoading, handleLogout }}>
            {children}
        </Auth.Provider>
    )
}

export default AuthContext

export const useAuth = () => useContext(Auth)