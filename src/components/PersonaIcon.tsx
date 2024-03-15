import styles from "@/components/PersonaPrevBanner.module.css";
import personaStyles from "@/components/PersonaShared.module.css";
import React from "react";
import {Persona} from "@/types/Persona";

export default function PersonaIcon(persona: Persona) {
    return <div className={`${styles.Icon}`}>
        <Image src={persona.iconSrc} alt={persona.displayName} width={128} height={128}/>
    </div>
}