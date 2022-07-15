import { createContext } from "react";
import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { authInitialState, authReducer } from "../Reducers/authReducer";

const authContext = createContext(null);

const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  const getTokenFromLocalStorage = localStorage.getItem("token") || null;
  const getUserFromLocalStorage = JSON.parse(
    localStorage.getItem("user") || null
  );
  useEffect(() => {
    if (getTokenFromLocalStorage !== null && getUserFromLocalStorage !== null)
      authDispatch({
        type: "LOGIN_PERSISTENT",
        payload: {
          token: getTokenFromLocalStorage,
          user: getUserFromLocalStorage,
        },
      });
    console.log(authState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
