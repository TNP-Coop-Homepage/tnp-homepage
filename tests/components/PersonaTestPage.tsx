import PersonaPrevCard from "@/components/PersonaPrevCard";
import PersonaPrevBanner from "@/components/PersonaPrevBanner";
import PersonaFullPage from "@/components/PersonaFullPage";
import {Persona} from "@/types/Persona";
import {TestPersona} from "./testPersona";
import styles from "./PersonaTestPage.module.css"
import "./TestPage.css";

export default function PersonaTestPage() {
    const persona: Persona = TestPersona;

    return <main className={styles.body}>
        <h1>Card components test</h1>
        <h2>Horizontal</h2>
        <div className={styles.horizontalCards}>
            <PersonaPrevCard {...persona} />
            <PersonaPrevCard {...persona} />
            <PersonaPrevCard {...persona} />
        </div>
        <h2>Vertical</h2>
        <div className={styles.verticalCards}>
            <PersonaPrevCard {...persona} />
            <PersonaPrevCard {...persona} />
            <PersonaPrevCard {...persona} />
        </div>

        <h1>Banner</h1>
        <PersonaPrevBanner {...persona} />
        <PersonaPrevBanner {...persona} />

        <h1>Full Page</h1>
        <PersonaFullPage {...persona} />
    </main>
}