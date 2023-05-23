import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    let user;
    if (localStorage.getItem('currentUser'))
        user = JSON.parse(localStorage.getItem('currentUser'));
    let isLoggedIn = (user) ? true : false;

    const [auth, setAuth] = useState(isLoggedIn);
    console.log('Auth', auth);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
    )
}