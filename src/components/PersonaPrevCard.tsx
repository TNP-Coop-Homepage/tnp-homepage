import React from "react";
import {Persona} from "@/types/Persona";
import styles from "./PersonaPrevCard.module.css";
import personaStyles from "./PersonaShared.module.css";
import {MAX_PERSONA_DESC_LENGTH} from "@/components/MAX_PERSONA_DESC_LENGTH";

export default function PersonaPrevCard(persona: Persona) {
    return (
        <main style={{ '--primaryColor': persona.primaryColor, '--secondaryColor': persona.secondaryColor, '--backgroundColor': persona.backgroundColor } as React.CSSProperties} className={styles.RootWrapper}>
            <img src={persona.iconSrc} alt={persona.displayName} className={`${styles.Icon} ${personaStyles.Icon}`} width={128} height={128}/>
            <div className={styles.TextAreaWrapper}>
                <h2>{persona.displayName}</h2>
                <p>{persona.description.length > 30 ? persona.description.substring(0, MAX_PERSONA_DESC_LENGTH-1) + "…" : persona.description}</p>
            </div>
        </main>
    )
}

