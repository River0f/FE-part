import React from "react";
import { useMutation } from "react-query";
import { login as loginAPI } from "../http/services/user";

export const AuthContext = React.createContext({
  login: () => {},
  logOut: () => {},
  setAuthToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const { mutateAsync: loginUser, isLoading: isLogining } = useMutation(
    (data) => loginAPI(data)
  );

  const { mutateAsync: registerUser, isLoading: isRegistering } = useMutation(
    (data) => loginAPI(data)
  );

  const login = (email, password) => {
    const data = loginUser({ email, password });
    console.log(data);
  };

  const register = (nickname, email, password) => {
    const data = registerUser({ nickname, email, password });
    console.log(data);
  };

  const contextValue = {
    login,
    register,
    isLogining,
    isRegistering,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
