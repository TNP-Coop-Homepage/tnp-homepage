import React from "react";
import {Persona} from "@/types/Persona";
import styles from "./PersonaPrevBanner.module.css";
import {MAX_PERSONA_BANNER_LENGTH} from "@/components/persona/PERSONA_CONSTS";
import PersonaIcon from "@/components/persona/PersonaIcon";
import InvertHexColor from "@/utils/color/InvertHexColor";

export default function PersonaPrevBanner(persona: Persona) {
    return (
        <main style={{
            '--primaryColor': persona.primaryColor,
            '--secondaryColor': persona.secondaryColor,
            '--backgroundColor': persona.backgroundColor,
            '--backgroundColorDark': InvertHexColor(persona.backgroundColor)
        } as React.CSSProperties} className={styles.RootWrapper}>
            <PersonaIcon  {...persona}/>
            <div className={styles.TextAreaWrapper}>
                <h2 className={styles.DisplayName}>{persona.displayName}</h2>
                <p>{persona.description.length > MAX_PERSONA_BANNER_LENGTH ? persona.description.substring(0, MAX_PERSONA_BANNER_LENGTH - 1) + "…" : persona.description}</p>
            </div>
        </main>
    )
}
