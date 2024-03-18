import { Work } from "@/types/Work"
import GamePreviewImages from "../gamePreviewImages/GamePreviewImages"
import styles from "./WorkIntroductionElement.module.css"
import BondAuthor from "./BondAuthor";


export default function WorkIntroductionElement(work: Work){    
    return (
        <div>
            <h1 className={styles.WorkTitle}>{work.title}</h1>
            <p>
                作者-&gt;{BondAuthor(work.authors)}
            </p>
                {work.images ? <GamePreviewImages {...work.images}></GamePreviewImages> : null}
            <p>
                {work.explanation}
            </p>
            <p>
                {work.comment}
            </p>
        </div>
    )
    }