"use client";

import styles from './Navigation.module.css';
import Link from "next/link";
import Image from "next/image";
import NavigationPageLink from "@/components/navigation/NavigationPageLink";
import NavigationExternalLink from "@/components/navigation/NavigationExternalLink";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CONTACT_FORM_URL } from "@/consts/CONTACT_FORM_URL";
import NavigationLink from "@/components/navigation/NavigationLink";

const Navigation = () => {

    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <>
            <div className={styles.Hamburger} onClick={() => setIsOpen(!isOpen)} style={{ backgroundColor: isOpen ? "transparent" : "#00000055" }}>
                {isOpen ? "×" : "≡"}
            </div>
            <nav className={styles.Navigation} style={{ left: isOpen ? 0 : "-100%" }}>
                <div className={styles.NavigationTop}>
                    <div className={styles.Logo}>
                        <Link href={"/"}>
                            <Image className={styles.LogoImage} src={"/logo_light.svg"} alt={"TNP Logo"} width={2880} height={1080} />
                        </Link>
                    </div>
                    <NavigationLink onClick={handleLinkClick}>
                        <div className={styles.Links}>
                            <NavigationPageLink title={"Home"} selected={pathname === "/"} url={"/"} />
                            <NavigationPageLink title={"About"} selected={pathname === "/about"} url={"/about"} />
                            <NavigationExternalLink title={"Blog"} url={"http://akitatnp.wp.xdomain.jp/"} />
                            <NavigationPageLink title={"Works"} selected={pathname === "/works"} url={"/works"} />
                            <NavigationExternalLink title={"Contact"} url={CONTACT_FORM_URL} />
                        </div>
                    </NavigationLink>
                </div>
                <div className={styles.NavigationBottom}>
                    <a href="https://twitter.com/tnp_akita">
                        <img className={styles.X} src="/X-logo.svg" alt="X" />
                    </a>
                    <p>
                        © 2025 TNP
                    </p>
                </div>
            </nav>
        </>
    );
};

export default Navigation;