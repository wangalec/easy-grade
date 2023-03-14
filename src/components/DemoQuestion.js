import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return(
        <nav className={styles.nav}>
            <ul className={styles.navInner}>
                <Link href='/demo'><li className={styles.navPages}>Demo</li></Link>
                <Link href='/demo'><li className={styles.navPages}>Login</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;