import Link from "next/link"

import styles from "./page.module.css";
import WorkIntroductionElement from "@/components/workIntrooductionElement/WorkIntroductionElement";
import { GamePreviewImage } from "@/types/GamePreviewImage";
import { Work } from "@/types/Work";

export default function WorkIntroduction() {

    const images: GamePreviewImage[] = [
        {
            imageSrc: "/sampleA.png",
            displayName: "A",
            width: 440,
            height: 310
        },
        {
            imageSrc: "/sampleB.png",
            displayName: "B",
            width: 440,
            height: 310
        },
        {
            imageSrc: "/sampleC.png",
            displayName: "C",
            width: 440,
            height: 310
        },
        {
            imageSrc: "/sampleD.png",
            displayName: "D",
            width: 440,
            height: 310
        },
        {
            imageSrc: "/sampleE.png",
            displayName: "E",
            width: 440,
            height: 310
        }
    ]

    const Corelynx: Work = {
        title: "Corelynx",
        authors: ["空中ブランコ"],
        images: images,
        explanation: "試合ごとに地形が変わる世界で Capture The Flag で遊ぶオンラインマルチプレイFPS。コアを見つけ占領し、敵から守り抜こう！",
        comment: null
    }

    const Vergilius: Work = {
        title: "Vergilius",
        authors: ["Δmp", "レイル", "℃(せし)", "yoshinob", "yugo"],
        images: null,
        explanation: "5人で合作した作品のプロトタイプ\nランダムに生成されるダンジョンを進んでいくローグライク。インベントリから魔法を組み替えてオリジナルの魔法を作り、深みを目指そう！",
        comment: null
    }

    const works: Work[] = [Corelynx, Vergilius]

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
