import Link from "next/link"

import styles from "./page.module.css";
import WorkIntroductionElement from "@/components/workIntrooductionElement/WorkIntroductionElement";
import { works } from "./WORK_CONTENTS";

export default function WorkIntroduction() {
    return (
        <div className={styles.Background}>
            <div className={styles.WorkIntroduction}>
                <title>{"WorkIntroduction"}</title>
                <h1 className={styles.Header}>WorkIntroduction</h1>
                <hr className={styles.HorizontalLine}></hr><br />
                <div className={styles.BodyText}>
                    <div className={styles.ParagraphMargin}>
                        <h2 className={styles.Header}>ここは？</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <p>
                            私たちTNPが過去に制作した作品の一部を紹介するページです
                        </p>
                        <p>
                            ここで紹介されている作品は、大学からプログラミングを始めた人の作品や皆で協力して創った作品もあるよ
                        </p>
                        <p>
                            自分もこんな作品を創ってみたい、遊んでみたいと思った方はぜひ見学を！お問い合わせは
                            <Link className={styles.LinkText} href={"/contact"}>こちら</Link>
                        </p>
                    </div>
                    <div className={styles.ParagraphMargin}>
                        <h2 className={styles.Header}>作品紹介</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <WorkIntroductionElement {...works}></WorkIntroductionElement>
                    </div>
                </div>
            </div>
        </div>
    );
}
