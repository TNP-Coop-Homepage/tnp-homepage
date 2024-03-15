import styles from "@/components/PersonaIcon.module.css";
import React from "react";
import {Persona} from "@/types/Persona";
import Image from "next/image";

export default function PersonaIcon(persona: Persona) {
    return <div className={`${styles.Icon}`}>
        <Image src={persona.iconSrc} alt={persona.displayName} width={128} height={128}/>
    </div>
}