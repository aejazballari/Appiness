import { useState } from "react";
import Validate from "../components/Validate";

import styles from "./styles/login.module.css";

const Login = (props) => {
  console.log(props.history);
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    credential: "",
  });
  const user = {
    username: "hruday@gmail.com",
    password: "hruday123",
  };
  console.log(values);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const Validate = (values) => {
    if (!values.name) {
      setErrors({ name: "Please enter your username", password: "" });
    }
    if (!values.password) {
      setErrors({ name: "", password: "Please enter password" });
    }

    if (!values.password && !values.name) {
      setErrors({
        name: "Please enter your username",
        password: "Please enter password",
      });
    }

    if (values.password && values.name) {
      setErrors({
        name: "",
        password: "",
      });
    }

    if (user.username !== values.name) {
      setErrors({ credential: "Please enter correct username and password" });
    }
    if (user.password !== values.password) {
      setErrors({
        credential: "Please enter correct username and password",
      });
    }
  };

  const clear = () => {
    setValues({
      name: "",
      password: "",
    });
  };

  const handleSubmit = () => {
    Validate(values);
    if (user.username === values.name && user.password === values.password) {
      clear();
      props.history.push("/EmployeeList");
      setErrors({ credential: "Please enter correct username and password" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.text}>
          <label htmlFor="name">Username</label>
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        {/* <br /> */}
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <div className={styles.text}>
          <label htmlFor="password">Password</label>
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        {/* <br /> */}
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.credential ? (
          <p className={`${styles.error} ${styles.final}`}>
            {errors.credential}
          </p>
        ) : (
          <p className={styles.final}></p>
        )}
        <button
          className={`${styles.btn}`}
          // disabled={
          //   name && number.length >= 9 && email && message ? false : true
          // }
          onClick={() => {
            handleSubmit();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
