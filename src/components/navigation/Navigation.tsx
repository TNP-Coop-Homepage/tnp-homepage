"use client";

import styles from './Navigation.module.css';
import Link from "next/link";
import Image from "next/image";
import NavigationPageLink from "@/components/navigation/NavigationPageLink";
import NavigationExternalLink from "@/components/navigation/NavigationExternalLink";
import { usePathname } from 'next/navigation'
import { CONTACT_FORM_URL } from '@/consts/CONTACT_FORM_URL';
import {useNavigationOpen} from "@/contexts/NavigationOpenContext";

const Navigation = () => {

    const pathname = usePathname()
    const { isOpen, toggleOpen } = useNavigationOpen();

    return (
        <nav className={`${styles.Navigation} ${isOpen ? styles.NavigationOpen : ""}`}>
            <div className={styles.NavigationClose} onClick={toggleOpen}>
                <img src={"/close.svg"} alt={"close"} />
            </div>
            <div className={styles.NavigationTop}>
                <div className={styles.Logo}>
                    <Link href={"/"} onClick={toggleOpen}>
                        <Image className={styles.LogoImage} src={"/logo_light.svg"} alt={"TNP Logo"} width={2880} height={1080} />
                    </Link>
                </div>
                <div className={styles.Links}>
                    <NavigationPageLink title={"Home"} selected={pathname === "/"} url={"/"} />
                    <NavigationPageLink title={"About"} selected={pathname === "/about"} url={"/about"} />
                    <NavigationExternalLink title={"Blog"} url={"http://akitatnp.wp.xdomain.jp/"} />
                    <NavigationPageLink title={"Works"} selected={pathname === "/works"} url={"/works"} />
                    <NavigationExternalLink title={"Contact"} url={CONTACT_FORM_URL} />
                </div>
            </div>
            <div className={styles.NavigationBottom}>
                <a href="https://twitter.com/tnp_akita">
                    <img className={styles.X} src="/X-logo.svg" alt="X" />
                </a>
                <p>
                    © 2024 TNP
                </p>
            </div>
        </nav>
    );
};

export default Navigation;