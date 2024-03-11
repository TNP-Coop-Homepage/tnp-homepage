import styles from "@/components/PersonaPrevBanner.module.css";
import personaStyles from "@/components/PersonaShared.module.css";
import React from "react";
import {Persona} from "@/types/Persona";

export default function PersonaIcon(persona: Persona) {
    return <img src={persona.iconSrc} alt={persona.displayName} className={`${styles.Icon} ${personaStyles.Icon}`} width={128}
         height={128}/>
}