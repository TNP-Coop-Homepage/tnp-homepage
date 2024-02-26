import styles from "./page.module.css"
export default async function About() {
    return (
    <div className={styles.About}>
        <title>{"About"}</title>
            <h1 className={styles.AboutTitle}>{"About"}</h1>
            <hr className={styles.HorizontalLine}></hr><br></br>
            <div className={styles.BodyText}>
                <h2 className={styles.BodyHeader}>{"TNPへようこそ"}</h2>
                <hr className={styles.HorizontalLine}></hr>
                <p>
                    {
                        "「秋田大学プログラミングサークルTNP」は秋田大学公認サークルです。\n\
TNPは、「The Next-generation Programmer」の略称で、次世代の第一線で活躍できる人材になってほしいという願いが込められています。プログラミング技術の向上を目指し、ゲーム制作を中心に活動しています。"
                    } 
                </p><br></br>
                <p>
                    {
                        "プログラミング初心者という人でも心配はいりません。\n\
TNPは、毎年五月頃から新入生に向けた「初年次講義」を行っています。\n\
現在のTNPの先輩も入学時プログラミング未経験という人がほとんどでした。\n\
初年次講義では、コンピュータゲーム開発用ライブラリ「DXライブラリ」でプログラミング言語「C/C++」を用いて、ゲームを製作します。これを最終目標に、基礎的な内容を0から学習します。\n\
TNPの活動を通して、プログラミング学習のハードルを下げ、興味を持つ人がどんどん増えてほしいと思っています。"
                    }
                </p><br></br>
                <h2 className={styles.BodyHeader}>{"活動内容"}</h2>
                <hr className={styles.HorizontalLine}></hr>
                <p>
                    {
                        "・制作したゲームをコミックマーケットに出品（8月、12月）\n\
・イラスト制作（コミックマーケットのサークルカット、サークル紹介のチラシデザインなど）\n\
・サイト制作（このホームページも、TNPの成員が制作しました）\n\
・競技プログラミング（課題解決のためのプログラムをはやく、正確に記述する競技のこと）"
                    }
                </p><br></br>
                <h2 className={styles.BodyHeader}>{"活動時間"}</h2>
                <hr className={styles.HorizontalLine}></hr>
                <p>
                    {
                        "TNPは、毎週水曜日と金曜日の17:00～18:30に「サークル棟部室」の二階で活動しています。\n\
（地図の画像）"
                    }
                </p><br></br>
                <h2 className={styles.BodyHeader}>{"イベント"}</h2>
                <hr className={styles.HorizontalLine}></hr>
                <h3 className={styles.BodySubHeader}>{"４月"}</h3>
                <p>
                    {
                        "「桜を見る会」\n\
新入部員の第一次歓迎会でもある「桜を見る会」は、千秋公園に桜を見に行きます。当日天候が悪い場合は、サークル棟でボードゲームなどをして遊んでいます。"
                    }
                </p>
                <h3 className={styles.BodySubHeader}>{"５月"}</h3>
                <p>
                    {
                        "「新入生歓迎会」\n\
昨年は、焼き肉を食べに行った後、カラオケに行きました。こうした交流を通じて、親睦を深めています。\n\
「初年次講義」\n\
この頃からTNPに加入する新入部員の人数が確定してきますので、上記でも説明した初年次講義を行います。"
                    }
                </p>
                <h3 className={styles.BodySubHeader}>{"７月"}</h3>
                <p>
                    {
                        "「コミックマーケット夏」\n\
コミケに秋田大学TNPとして参加します。これまで作ってきたゲームを活動してきた成果として、コミケで販売しています。\n\
コミケとは、世界最大の同人誌即売会のことです。"
                    }
                </p>
                <h3 className={styles.BodySubHeader}>{"１０月"}</h3>
                <p>
                    {
                        "「秋大祭」\n\
秋大祭では、自作ゲームの展示を行っています。また、秋大祭が終わったら打ち上げとしてみんなで飲みに行きます。"
                    }
                </p>
                <h3 className={styles.BodySubHeader}>{"１２月"}</h3>
                <p>
                    {
                        "「コミックマーケット冬」\n\
コミックマーケットは、年二回開催されており、TNPは両方参加しています。"
                    }
                </p>
                <h3 className={styles.BodySubHeader}>{"３月"}</h3>
                <p>
                    {
                        "「追いコン」\n\
追いコンとは、4年生を追い出すコンペ（食事会）の略称です。就職活動を終え、秋田大学を卒業するTNPの先輩をこの飲み会を通して送り出します。"
                    }
                </p>
                <h3 className={styles.BodySubHeader}>{"不定期開催"}</h3>
                <p>
                    {
                        "TNPでは、その他にも成員同士の交流または成員のプログラミング技術向上を目的として活動時間外に集まって、作業したり遊んだりすることがあります。主に活動日の活動後や休日に行うことが多いです。\n\
「ゲームジャム（プログラミングの勉強会）」\n\
「マインクラフト（JAVA版）」\n\
「TRPG（クトゥルフ神話がメイン）」\n\
「ボードゲーム会」"
                    }
                </p><br></br>
                <h2 className={styles.BodyHeader}>{"Welcome!"}</h2>
                <hr className={styles.HorizontalLine}></hr>
                <p>
                    {
                    "TNPはいつでもプログラミングや、制作活動に興味がある人をいつでも募集しています。\n\
加入する時期は何月でも構いません！いつでも見学に来てください！\n\
ご質問がございましたら、お問い合わせフォームにてお問い合わせください！"
                    }
                </p><br></br>
            </div>
    </div>)
}