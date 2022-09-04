import React from 'react'
import { ActiveLink } from './ActiveLink'
import styles from "./Navbar.module.css"

const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
  ];

  return (
    <nav className={styles["menu-container"]}>
      {
        menuItems.map(({text, href}) => (
          <ActiveLink key={text} path={href} name={text}/>
        ))
      }
    </nav>
  )
}

export default Navbar