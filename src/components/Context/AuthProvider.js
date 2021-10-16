import React, { createContext } from 'react';


export const AuthContext = createContext();



const AuthProvider = ({Children}) => {
    // const {Children} = props;
    return (
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;