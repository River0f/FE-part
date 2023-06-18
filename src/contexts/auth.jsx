import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUser, login as loginAPI } from "../http/services/user";

export const AuthContext = React.createContext({
  login: () => {},
  logout: () => {},
  setAuthToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const queryClient = useQueryClient();

  const { mutate: loginUser, isLoading: isLogining } = useMutation((data) =>
    loginAPI(data)
  );

  const { mutate: registerUser, isLoading: isRegistering } = useMutation(
    (data) => loginAPI(data)
  );

  console.log(token);

  const { data: user } = useQuery("user", () => getUser(), {
    enabled: !(token === "null"),
  });

  const login = ({ email, password }, onLogin) => {
    loginUser(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          queryClient.invalidateQueries("user");
          setToken(data.token);
          onLogin();
        },
      }
    );
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    queryClient.setQueriesData("user", () => undefined);
  };

  const register = (nickname, email, password) => {
    registerUser(
      { nickname, email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        },
      }
    );
  };

  const contextValue = {
    login,
    logout,
    register,
    user: user || null,
    isLogining,
    isRegistering,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
