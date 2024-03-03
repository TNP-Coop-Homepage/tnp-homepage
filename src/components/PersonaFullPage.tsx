import React from "react";
import {Persona} from "@/types/Persona";
import styles from "./PersonaFullPage.module.css";

export default function PersonaFullPage(persona: Persona) {
    return (
            <main style={{'--primaryColor': persona.primaryColor} as React.CSSProperties}>
                <div className={styles.PersonaAreaWrapper}>
                    <img src={persona.iconSrc} alt={persona.displayName} width={128} height={128}/>
                    <h2 className={styles.DisplayName}>{persona.displayName}</h2>
                </div>
                <p>{persona.description}</p>
            </main>
    )
}