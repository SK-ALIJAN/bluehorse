"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "./loginSchema";
import style from "./form.module.css";
import { useRouter } from "next/navigation";
import { useContextApi } from "@/contextApi";
import { MdError } from "react-icons/md";

let authData = {
  name: "",
  email: "",
  password: "",
};

const Form = () => {
  const router = useRouter();
  let { auth, login, logout } = useContextApi();

  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: authData,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        let data = { ...values, isAuth: true };
        localStorage.setItem("auth", JSON.stringify(data));
        login(values);
        router.push("/");
        action.resetForm();
      },
    });

  return (
    <React.Fragment>
      <form action="#" onSubmit={handleSubmit} className={style.Form}>
        <div>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <p>
              {" "}
              <MdError /> {errors.name}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          {errors.email && touched.email && (
            <p>
              {" "}
              <MdError />
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          {errors.password && touched.password && (
            <p>
              {" "}
              <MdError />
              {errors.password}
            </p>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
