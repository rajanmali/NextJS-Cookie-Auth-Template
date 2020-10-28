import { useState } from "react";
import PropTypes from "prop-types";

import { LoginUser } from "../lib/auth";

const LoginForm = () => {
  const [data, setData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    LoginUser({ ...data });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  //   name: PropTypes.string,
};

export default LoginForm;
