import React from 'react'
import Link from 'next/link';
import style from "./style.module.css"

const Footer = () => {
  return (
    <div className={style.main}>
      <div>Logo</div>
      <div className={style.menus}>
      <Link href={"/about"}>about</Link>
      <Link href={"/contact"}>contact</Link>
      <Link href={"/blog"}>blog</Link>
      </div>
    </div>
  )
}

export default Footer
