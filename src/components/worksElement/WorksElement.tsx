import { Work } from "@/types/Work"
import { GamePreviewImage } from "@/types/GamePreviewImage";
import GamePreviewImages from "./GamePreviewImages"
import styles from "./WorksElement.module.css"

export default function WorksElement({ works }: { works: Work[] }) {
    return (
        <div>
            {
                Object.keys(works).map((value, i) => {
                    return (
                        <div key={i}>
                            <h1 className={styles.WorkTitle}>{works[i].title}</h1>
                            <p>
                                作者→{works[i].authors.join("、")}
                            </p>
                                {works[i].images ? <GamePreviewImages {...(works[i].images as GamePreviewImage[])}></GamePreviewImages> : null}
                            <p>
                                {works[i].explanation}
                            </p>
                            <p>
                                {works[i].comment}
                            </p>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}