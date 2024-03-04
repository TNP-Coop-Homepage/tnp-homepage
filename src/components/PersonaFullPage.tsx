import React from "react";
import {Persona} from "@/types/Persona";
import personaStyles from "./PersonaShared.module.css";
import localStyles from "./PersonaFullPage.module.css";

export default function PersonaFullPage(persona: Persona) {
    return (
            <main style={{'--primaryColor': persona.primaryColor} as React.CSSProperties}>
            <main style={{'--primaryColor': persona.primaryColor, '--secondaryColor': persona.secondaryColor, '--backgroundColor': persona.backgroundColor } as React.CSSProperties}>
                <div className={localStyles.PersonaAreaWrapper}>
                    <img src={persona.iconSrc} alt={persona.displayName} width={128} height={128}/>
                    <h2 className={localStyles.DisplayName}>{persona.displayName}</h2>
                </div>
                <p>{persona.description}</p>
            </main>
    )
}