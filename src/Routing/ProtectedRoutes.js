import React from 'react';
import {Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    const isAuth=window.localStorage.getItem("Token")
  return isAuth ? <Outlet/>:<Navigate to ="/auth"/>;
};
