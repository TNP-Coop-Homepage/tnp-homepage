"use client";

import styles from './Navigation.module.css';
import Link from "next/link";
import Image from "next/image";
import NavigationPageLink from "@/components/navigation/NavigationPageLink";
import NavigationExternalLink from "@/components/navigation/NavigationExternalLink";
import { usePathname } from 'next/navigation'
import { CONTACT_FORM_URL } from '@/consts/CONTACT_FORM_URL';

const Navigation = () => {

    const pathname = usePathname()

    return (
        <nav className={styles.Navigation}>
            <div className={styles.NavigationTop}>
                <div className={styles.Logo}>
                    <Link href={"/"}>
                        <Image className={styles.LogoImage} src={"/logo_light.svg"} alt={"TNP Logo"} width={2880} height={1080} />
                    </Link>
                </div>
                <div className={styles.Links}>
                    <NavigationPageLink title={"Home"} selected={pathname === "/"} url={"/"} />
                    <NavigationPageLink title={"About"} selected={pathname === "/about"} url={"/about"} />
                    <NavigationExternalLink title={"Blog"} url={"http://akitatnp.wp.xdomain.jp/"} />
                    <NavigationPageLink title={"GameCenter"} selected={pathname === "/gamecenter"} url={"/gamecenter"} />
                    <NavigationExternalLink title={"Contact"} url={CONTACT_FORM_URL} />
                </div>
            </div>
            <div>
                <a href="https://twitter.com/tnp_akita"><img className={styles.X} src="X-logo.png" alt="X" width="56px" height="56px" /></a>
                <p>
                    © 2024 TNP
                </p>
            </div>
        </nav>
    );
};

export default Navigation;