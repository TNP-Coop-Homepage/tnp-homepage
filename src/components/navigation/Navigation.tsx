"use client";

import styles from './Navigation.module.css';
import Link from "next/link";
import Image from "next/image";
import NavigationPageLink from "@/components/navigation/NavigationPageLink";
import NavigationExternalLink from "@/components/navigation/NavigationExternalLink";
import { usePathname } from 'next/navigation'
import {useEffect, useState} from "react";

const Navigation = () => {

    const pathname = usePathname();
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    useEffect(() => {
        setDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }, []);

    return (
        <nav className={styles.Navigation}>
            <div className={styles.NavigationTop}>
                <div className={styles.Logo}>
                    <Link href={"/"}>
                        <Image className={styles.LogoImage} src={darkTheme ? "/logo_dark.svg" : "/logo_light.svg"} alt={"TNP Logo"} width={2880} height={1080} />
                    </Link>
                </div>
                <div className={styles.Links}>
                    <NavigationPageLink title={"Home"} selected={pathname === "/"} url={"/"} />
                    <NavigationPageLink title={"About"} selected={pathname === "/about"} url={"/about"} />
                    <NavigationExternalLink title={"Blog"} url={"http://akitatnp.wp.xdomain.jp/"} />
                    <NavigationPageLink title={"GameCenter"} selected={pathname === "/gamecenter"} url={"/gamecenter"} />
                    <NavigationPageLink title={"Contact"} selected={pathname === "/contact"} url={"/contact"} />
                </div>
            </div>
            <div>
                <p>
                    © 2024 TNP
                </p>
            </div>
        </nav>
    );
};

export default Navigation;