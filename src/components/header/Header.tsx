"use client";

import styles from './Header.module.css';

import {useNavigationOpen} from "@/contexts/NavigationOpenContext";
import Link from "next/link";

const Header = () => {

    const { toggleOpen } = useNavigationOpen();

    return (
        <header className={styles.Header}>
            <div className={styles.HeaderIcon} onClick={toggleOpen}>
                <img src="/menu.svg" alt="menu" />
            </div>
            <Link href={"/"} className={styles.HeaderLogo}>
                <img src="/white_logo_small.svg" alt="TNP Logo" />
                TNP
            </Link>
            <div className={styles.HeaderIcon}>

            </div>
        </header>
    );
};

export default Header;