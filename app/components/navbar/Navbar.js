"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./style.module.css";
import { useRouter } from "next/navigation";
import { useContextApi } from "@/contextApi";

const Navbar = () => {
  const router = useRouter();
  let { auth, login, logout } = useContextApi();

  let handleClick = () => {
    router.push("/profile");
  };

  let handleLogin = () => {
    router.push("/authentication");
  };

  let handleLogout = () => {
    logout();
    router.replace("/");
  };

  return (
    <div className={style.main}>
      <Link className={style.logo} href={"/"}>
        logo
      </Link>

      <div className={style.menus}>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        {auth.isAuth ? (
          <button onClick={handleClick}>Profile</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}

        {auth.isAuth ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  );
};

export default Navbar;
