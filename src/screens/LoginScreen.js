import React, { useState, useEffect } from "react";
import authApi from "../api/auth";
import errorHandler from "../utils/error";
import formHandler from "../utils/form";
import colors from "../config/colors";
import storage from "../auth/storage";
import useAuth from "../auth/useAuth";
import { Redirect } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import constants from "../config/constants";
import TextInput from "../components/TextInput";
import Title from "../components/Title";

function LoginScreen() {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { logIn } = useAuth();

  useEffect(() => {
    loadCredentials();
  }, []);

  const loadCredentials = () => {
    const storedCredentials = storage.getCredentials();
    if (storedCredentials) {
      setCredentials(storedCredentials);
    }
  };

  const handleCheck = (event) => {
    const newValue = event.target.checked;
    setCheckboxValue(newValue);
  };

  const handleSubmit = async (event) => {
    const data = formHandler.getData(event.target);

    event.preventDefault();

    const result = await authApi.login(data);
    if (!result.ok) {
      const message = errorHandler.print(result);
      return setLoginError(message);
    }

    setLoginError(false);
    logIn(result.data);

    if (checkboxValue) {
      storage.storeCredentials(data);
    }

    return <Redirect to={constants.ROUTES.CONTACTS} />;
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.imageContainer}>
        <img alt="Login" src={constants.LOGIN_SCREEN.PRESENTATION_IMAGE_URL} />
      </div>
      <div style={styles.loginContainer}>
        <Title value={constants.LOGIN_SCREEN.FORM_TILE} />
        <form onSubmit={handleSubmit}>
          <TextInput
            className="button"
            type="email"
            name="email"
            placeholder={constants.PLACEHOLDERS.EMAIL}
            defaultValue={credentials.email}
          />
          <TextInput
            className="button"
            type="password"
            name="password"
            placeholder={constants.PLACEHOLDERS.PASSWORD}
            defaultValue={credentials.password}
          />
          <label style={styles.rememberMe}>
            <input type="checkbox" onChange={handleCheck} />
            &nbsp; {constants.LOGIN_SCREEN.REMEMBER_ME}
          </label>

          <ErrorMessage
            visible={loginError}
            color={colors.danger}
            message={loginError}
          />
          <input
            className="button"
            style={styles.submitButton}
            type="submit"
            value={constants.LOGIN_SCREEN.SUBMIT_TITLE}
          />
        </form>
      </div>
    </div>
  );
}

const styles = {
  imageContainer: {
    width: "60%",
    height: "550px",
    float: "left",
    overflow: "hidden",
    margin: "20px",
    marginTop: "0px",
  },
  loginContainer: {
    width: "30%",
    float: "left",
  },
  mainContainer: {
    marginTop: "20px",
  },
  rememberMe: {
    paddingLeft: "5px",
  },
  submitButton: {
    backgroundColor: colors.secondary,
    border: "none",
    borderRadius: "50px",
    color: colors.white,
    padding: "5px",
    marginTop: "20px",
    width: "100%",
  },
};

export default LoginScreen;
