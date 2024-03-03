import React from "react";
import {Persona} from "@/types/Persona";
import styles from "./PersonaPrev.module.css";
import {maxPersonaDescriptionLength} from "@/components/MaxPersonaDescriptionLength";

export default function PersonaPrev(persona: Persona) {
    return (
        <main style={{ '--primaryColor': persona.primaryColor } as React.CSSProperties} className={styles.RootWrapper}>
            <img src={persona.iconSrc} alt={persona.displayName} className={styles.Icon} width={128} height={128}/>
            <div className={styles.TextAreaWrapper}>
                <h2>{persona.displayName}</h2>
                <p>{persona.description.length > 30 ? persona.description.substring(0, maxPersonaDescriptionLength-1) + "…" : persona.description}</p>
            </div>
        </main>
    )
}

