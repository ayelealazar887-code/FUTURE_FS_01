import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const login = (data) => {
        localStorage.setItem('token', data.token);
        setUser(data.token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider 
            value = {
                {
                    user,
                    login,
                    logout,
                }
            }>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}