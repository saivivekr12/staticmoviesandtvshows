import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const ProtectedRoutes = ({children}:any) => {
   const data = useContext(UserContext);
    if (!data?.token) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
}

export default ProtectedRoutes