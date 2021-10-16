import React, { createContext } from 'react';
import useFirebase from '../../hooks/UseFirebase';


export const AuthContext = createContext();



const AuthProvider = ({Children}) => {
    // const {Children} = props;
    const allContext = useFirebase;
    return (
        <AuthContext.Provider value={allContext}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;