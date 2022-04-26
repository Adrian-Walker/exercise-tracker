import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [userInputs, setUserInputs] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const url = toggle ? "/profile/login" : "/profile/register";
    try {
      const { data } = await axios.post(`${BASE_URL}${url}`, { ...userInputs });
      localStorage.setItem("userDetails", JSON.stringify(data.userProfile));
      localStorage.setItem("token", data.token);
      setError("");
      navigate("/");
      window.location.reload()
    } catch (err) {
      console.log(err);
      setError(err.response?.data.message);
    }
  };

  const handleChange = (e) =>
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  return (
    <div>
      {toggle ? (
        <>
          <h1>Login</h1>
          <form onSubmit={onFormSubmit}>
            <input
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="username"
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="password"
            />
            <button type="submit">Login</button>
          </form>
          {error && <p>{error}</p>}
          <a href="#" type="button" onClick={() => setToggle(false)}>
            Don't have an account?
          </a>
        </>
      ) : (
        <>
          <h1>SignUp</h1>
          <form onSubmit={onFormSubmit}>
            <input
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="username"
              required
            />
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="password"
              required
            />
            <button type="submit">Signup</button>
          </form>
          <a href="#" type="button" onClick={() => setToggle(true)}>
            Already have an account?
          </a>
        </>
      )}
    </div>
  );
};

export default Auth;
