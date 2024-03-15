import React from "react";
import {Persona} from "@/types/Persona";
import styles from "./PersonaFullPage.module.css";
import PersonaIcon from "@/components/PersonaIcon";

export default function PersonaFullPage(persona: Persona) {
    return (
        <main style={{
            '--primaryColor': persona.primaryColor,
            '--secondaryColor': persona.secondaryColor,
            '--backgroundColor': persona.backgroundColor
        } as React.CSSProperties}>
            <div className={styles.PersonaAreaWrapper}>
                <PersonaIcon {...persona}/>
                <h2 className={styles.DisplayName}>{persona.displayName}</h2>
            </div>
            <p>{persona.description}</p>
        </main>
    )
}