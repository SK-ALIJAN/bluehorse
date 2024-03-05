"use client";

import { createContext, useContext, useState } from "react";

let Context = createContext();

let data = {
  isAuth: JSON.parse(localStorage.getItem("auth"))?.isAuth,
  data: null,
};

export let ContextProvider = ({ children }) => {
  let [auth, setAuth] = useState(data);
  let authObj = {
    auth,
    login: (data) => {
      setAuth((prev) => {
        return { ...prev, isAuth: true, data };
      });
    },
    logout: () => {
      localStorage.setItem("auth",null);
      setAuth((prev) => {
        return { ...prev, isAuth: false, data: null };
      });
    },
  };

  return <Context.Provider value={authObj}>{children}</Context.Provider>;
};

// custome hook
export let useContextApi = () => {
  return useContext(Context);
};
