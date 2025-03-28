import Link from "next/link"

import styles from "./page.module.css";
import WorksElement from "@/components/worksElement/WorksElement";
import { works } from "./WORK_CONTENTS";
import { CONTACT_FORM_URL } from "@/consts/CONTACT_FORM_URL";
import HeaderImage from "@/components/headerImage/HeaderImage";

export default function Works() {
    return (
        <div className={styles.Background}>
            <HeaderImage />
            <main className={styles.Works}>
                <title>{"Works - 秋田大学プログラミングサークルTNP"}</title>
                <h1 className={styles.Header}>Works</h1>
                <hr className={styles.HorizontalLine}></hr><br />
                <div className={styles.BodyText}>
                    <section className={styles.SectionMargin}>
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
                            <Link className={styles.LinkText} href={CONTACT_FORM_URL}>こちら</Link>
                        </p>
                    </section>
                    <section className={styles.SectionMargin}>
                        <h2 className={styles.Header}>作品紹介</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <WorksElement works={works}></WorksElement>
                    </section>
                </div>
            </main>
        </div>
    );
}
