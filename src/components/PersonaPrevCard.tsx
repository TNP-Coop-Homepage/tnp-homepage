import React from "react";
import {Persona} from "@/types/Persona";
import styles from "./PersonaPrevCard.module.css";
import {MAX_PERSONA_DESC_LENGTH} from "@/components/MAX_PERSONA_DESC_LENGTH";
import PersonaIcon from "@/components/PersonaIcon";

export default function PersonaPrevCard(persona: Persona) {
    return (
        <main style={{ '--primaryColor': persona.primaryColor, '--secondaryColor': persona.secondaryColor, '--backgroundColor': persona.backgroundColor } as React.CSSProperties} className={styles.RootWrapper}>
            <PersonaIcon  {...persona}/>
            <div className={styles.TextAreaWrapper}>
                <h2>{persona.displayName}</h2>
                <p>{persona.description.length > MAX_PERSONA_DESC_LENGTH ? persona.description.substring(0, MAX_PERSONA_DESC_LENGTH-1) + "…" : persona.description}</p>
            </div>
        </main>
    )
}

