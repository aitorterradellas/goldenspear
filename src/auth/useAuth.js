import AuthContext from "./context";
import { useContext } from "react";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logIn = (authToken) => {
    const user = jwtDecode(authToken, { body: true });
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return { user, logOut, logIn };
};

export default useAuth;
