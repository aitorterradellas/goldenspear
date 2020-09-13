import React, { useEffect, useState } from "react";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import ContactsScreen from "./screens/ContactsScreen";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import storage from "./auth/storage";
import AuthContext from "./auth/context";
import constants from "./config/constants";

function App() {
  const [user, setUser] = useState();

  const getUser = () => {
    const user = storage.getUser();
    if (user) {
      setUser(user);
    }
  };

  useEffect(getUser, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Route exact path={constants.ROUTES.LOGIN}>
          {user ? <Redirect to={constants.ROUTES.CONTACTS} /> : <LoginScreen />}
        </Route>
        <Route path={constants.ROUTES.CONTACTS}>
          {!user ? (
            <Redirect to={constants.ROUTES.LOGIN} />
          ) : (
            <ContactsScreen />
          )}
        </Route>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
