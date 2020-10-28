import { useState } from "react";
import PropTypes from "prop-types";
import Router from "next/router";

import { LoginUser } from "../lib/auth";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "Sincere@april.biz",
    password: "hildegard.org",
    error: "",
    isLoading: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, error: "", isLoading: true });
    LoginUser({ ...data })
      .then(() => {
        Router.push("/profile");
      })
      .catch((err) => {
        showError(err);
      });
  };

  const showError = (err) => {
    const error = (err.response && err.response.data) || err.message;
    setData({ ...data, error, isLoading: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={data.email}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={data.password}
        ></input>
      </div>
      <button type="submit" onClick={handleSubmit} disabled={data.isLoading}>
        {data.isLoading ? "Loading..." : "Login"}
      </button>
      {data.error && <div>{data.error}</div>}
    </form>
  );
};

LoginForm.propTypes = {
  //   name: PropTypes.string,
};

export default LoginForm;
