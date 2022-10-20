import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	loginUser,
	fetchUser,
	getError,
	setError,
	isLoggedStatus,
} from '../../features/user/userSlice';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState({});
  const loginAttempt = useSelector((state) => state.user.token);
  const loginAttempError = useSelector(getError);
  const isLogged = useSelector(isLoggedStatus);
  const ToastSuccessId = "ToastSuccessId";
  const ToastErrorId = "ToastErrorId";

  const handleRegister = () => {
    navigate("/signUp");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ login }));
  };
  const handleChange = (prop) => (event) => {
    let value = event.target.value;
    if (prop == "username") {
      value = value.toLowerCase();
    }
    setLogin({
      ...login,
      [prop]: value,
    });
  };
  useEffect(() => {
    loginAttempt &&
      dispatch(fetchUser()) &&
      toast.success("🎉 Success Login 🎉!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastId: ToastSuccessId,
      }) &&
      navigate("/");
  }, [loginAttempt]);

  useEffect(() => {
    if (loginAttempError) {
      toast.error(loginAttempError, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        toastId: ToastErrorId,
      });
      dispatch(setError());
    }
  }, [loginAttempError, isLogged]);

  return (
    <>
      <div className="large-logo">
        <img src="/largelogo.svg" alt="Logo" />
        <h1>HELLO KITCHEN</h1>
      </div>
      <div className="login">
        <div className="loginContainer">
          <h1>Login</h1>
          <hr />
          <form onSubmit={handleSubmit} autoComplete="on">
            <div className="box">
              <label htmlFor="username" className="fl fontLabel">
                {" "}
                Username:{" "}
              </label>
              <div className="fr">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="textBox"
                  autoFocus="on"
                  required
                  onChange={handleChange("username")}
                />
              </div>
              <div className="clr"></div>
            </div>

            <div className="box">
              <label htmlFor="password" className="fl fontLabel">
                {" "}
                Password:{" "}
              </label>
              <div className="fr">
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  className="textBox"
                  onChange={handleChange("password")}
                />
              </div>
              <div className="clr"></div>
            </div>

            <div className="box">
              <input
                type="submit"
                name="login"
                className="submit"
                value="Login"
              />
              <button onClick={handleRegister}> Register </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
