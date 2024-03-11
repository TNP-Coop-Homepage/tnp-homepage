import styles from "./page.module.css";

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
                            私たちTNPが過去に製作した作品の一部を紹介するページです
                        </p>
                        <p>
                            ここで紹介されている作品は、大学からプログラミングを始めた人の作品や皆で協力して創った作品もあるよ
                        </p>
                        <p>
                            自分もこんな作品を創ってみたい、遊んでみたいと思った方はぜひ見学を！お問い合わせはこちら
                        </p>
                    </div>
                    <div className={styles.ParagraphMargin}>
                        <h2 className={styles.Header}>作品紹介</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <h3 className={styles.BodySubHeader}>Corelynx</h3>
                        <p>
                            作者-&gt;空中ブランコ
                        </p>
                        <p>
                            ***画像***
                        </p>
                        <p>
                            試合ごとに地形が変わる世界で Capture The Flag で遊ぶオンラインマルチプレイFPS。コアを見つけ占領し、敵から守り抜こう！
                        </p>
                        <p>
                            ***あれば何か一言***
                        </p><br />
                        <h3 className={styles.BodySubHeader}>Vergilius</h3>
                        <p>
                            作者-&gt;Δmp.、レイル、℃(せし)、yoshinob、yugo
                        </p>
                        <p>
                            ***画像***
                        </p>
                        <p>
                            5人で合作した作品のプロトタイプ
                        </p>
                        <p>
                            ランダムに生成されるダンジョンを進んでいくローグライク。インベントリから魔法を組み替えてオリジナルの魔法を作り、深みを目指そう！
                        </p>
                        <p>
                            ***あれば何か一言***
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
