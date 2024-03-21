import { Work } from "@/types/Work"
import { GamePreviewImage } from "@/types/GamePreviewImage";
import GamePreviewImages from "./GamePreviewImages"
import styles from "./WorkIntroductionElement.module.css"

export default function WorkIntroductionElement(works: Work[]) {

    const introductions = Object.keys(works).map((value, i) => {
        return (
            <div key={i}>
                <h1 className={styles.WorkTitle}>{works[i].title}</h1>
                <p>
                    作者→{works[i].authors.join("、")}
                </p>
                    {works[i].images ? <GamePreviewImages {...works[i].images}></GamePreviewImages> : null}
                <p>
                    {works[i].explanation}
                </p>
                <p>
                    {works[i].comment}
                </p>
                <br />
            </div>
        )
    });

    return (
        <div>
            {introductions}
        </div>
    )
}