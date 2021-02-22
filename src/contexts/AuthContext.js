import React, { useContext, useState } from 'react'
import UserDataService from '../services/UserDataService'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signup(username, pasword) {
        UserDataService.signup(signupData)
    }

    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
