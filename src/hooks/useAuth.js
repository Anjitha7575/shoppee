import React, { createContext, useMemo, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children, userData }) => {
    const [user, setUser] = useLocalStorage('user', userData);
    const navigate = useNavigate();
    const login = (data) => {
        if (data) {
            setUser(data);
            navigate('/', { replace: true });
        }
    }

    const logout = () => {
        setUser(null);
        navigate('/login', { replace: true });
    }

    const updateUserInfo = (data) => {
        if (data) {
            setUser(data);
        }
    }

    let value = useMemo(() => {
        return {
            user,
            login,
            logout,
            updateUserInfo
        }
    }, [user])
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};