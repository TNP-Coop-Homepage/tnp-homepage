import styles from "./page.module.css"
export default function About() {
    return (
        <div className={styles.Background}>
            <div className={styles.About}>
                <title>{"About"}</title>
                <h1 className={styles.Header}>About</h1>
                <hr className={styles.HorizontalLine}></hr><br />
                <div className={styles.BodyText}>
                    <div className={styles.ParagraphMargin}>
                        <h2 className={styles.Header}>TNPへようこそ</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <p>
                            「秋田大学プログラミングサークルTNP」は秋田大学公認サークルです。
                        </p>
                        <p>
                            TNPは、「The Next-generation Programmers」の略称で、次世代の第1線で活躍できる人材になってほしいという願いが込められています。プログラミング技術の向上を目指し、ゲーム制作を中心に活動しています。
                        </p><br />
                        <p>
                            プログラミング初心者という人でも心配はいりません。
                        </p>
                        <p>
                            TNPでは、毎年五月頃から新入生に向けた「初年次講義」を行っています。
                        </p>
                        <p>
                            現在のTNPのメンバーも入学時プログラミング未経験という人がほとんどです。
                        </p>
                        <p>
                            初年次講義では、コンピュータゲーム開発用ライブラリ「DXライブラリ」でプログラミング言語「C++」を用いて、ゲームを制作します。これを最終目標に、基礎的な内容を0から学習します。
                        </p>
                        <p>
                            TNPの活動を通して、プログラミング学習のハードルを下げ、興味を持つ人がどんどん増えてほしいと思っています。
                        </p>
                    </div>
                    <div className={styles.ParagraphMargin}>
                        <h2 className={styles.Header}>活動内容</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <ul className={styles.UnorderedList}>
                            <li>制作したゲームをコミックマーケットに出品(8月、12月)</li>
                            <li>イラスト制作(コミックマーケットのサークルカット、サークル紹介のチラシデザインなど)</li>
                            <li>競技プログラミング(課題解決のためのプログラムを速く、正確に記述する競技のこと)</li>
                            <li>シナリオ制作(TRPG、ノベル)</li>
                            <li>音楽制作(DTM)</li>
                            <li>好きなゲームで遊んだり創作したり(Minecraftなど)</li>
                        </ul>
                    </div>
                    <div className={styles.ParagraphMargin}>
                        <h2 className={styles.Header}>活動時間</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <p>
                            TNPは、毎週水曜日と金曜日の17:00～18:30に「サークル棟部室」の2階で活動しています。
                        </p>
                        <p>
                            <>{/*地図を載せる*/}</>
                            上記の画像の赤色で示すところが部室です。いつでも見学を受け付けていますので、ぜひお越しください！
                        </p>
                    </div>
                    <div className={styles.ParagraphMargin}>
                        <h2 className={styles.Header}>イベント</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <h3 className={styles.BodySubHeader}>4月</h3>
                        <p>
                            「桜を見る会」
                        </p>
                        <p>
                            新入部員の第一次歓迎会でもある「花見」は、千秋公園に桜を見に行きます。当日天候が悪い場合は、サークル棟でボードゲームなどをして遊んでいます。
                        </p>
                        <p>
                            <strike>しかし大抵は、なぜか当日天候が悪くなってしまい、部室で「花見」(とボードゲーム)を行っています。</strike>
                        </p>
                        <h3 className={styles.BodySubHeader}>5月</h3>
                        <p>
                            「新入生歓迎会」
                        </p>
                        <p>
                            昨年は、焼き肉を食べに行った後、カラオケに行きました。こうした交流を通じて、親睦を深めています。
                        </p>
                        <p>
                            「初年次講義」
                        </p>
                        <p>
                            TNPに加入するメンバーの人数が確定してきたら、初年次講義を行います。C++ を使ったプログラミングや、プログラミング全般の知識を学びます。コーディングなしでゲームを作ることも可能ですが、全員がある程度の技術を身につけることを目的としています。このため、5月以外にも随時行います。
                        </p>
                        <h3 className={styles.BodySubHeader}>7月</h3>
                        <p>
                            「コミックマーケット夏」
                        </p>
                        <p>
                            コミックマーケット(コミケ)に秋田大学TNPとして参加します。これまで作ってきたゲームを活動してきた成果として、コミケで販売しています。ちなみにコミケとは、世界最大級の同人誌即売会のことです。
                        </p>
                        <h3 className={styles.BodySubHeader}>10月</h3>
                        <p>
                            「秋大祭」
                        </p>
                        <p>
                            秋大祭(いわゆる大学祭)では、ゲームの展示や試遊会を行い、毎年多くの地域の方々に遊んでいただいています。また、秋大祭が終わったら打ち上げとしてみんなで飲みに行きます。
                        </p>
                        <h3 className={styles.BodySubHeader}>12月</h3>
                        <p>
                            「コミックマーケット冬」
                        </p>
                        <p>
                            コミックマーケットは、年2回開催されており、TNPは両方に参加しています。こちらでもゲームを活動成果として、コミックマーケットで頒布・販売します。
                        </p>
                        <h3 className={styles.BodySubHeader}>3月</h3>
                        <p>
                            「追いコン」
                        </p>
                        <p>
                            追いコンとは、4年生を追い出すコンペ(食事会)の略称です。就職活動を終え、秋田大学を卒業するTNPの先輩をこの飲み会を通して送り出します。
                        </p>
                        <h3 className={styles.BodySubHeader}>不定期開催</h3>
                        <p>
                            TNPでは、その他にもメンバー同士の交流またはメンバーのプログラミング技術向上を目的として活動時間外に集まって、作業したり遊んだりすることがあります。主に活動日の活動後や休日に行うことが多いです。
                        </p>
                        <ul className={styles.UnorderedList}>
                            <li>ゲームジャム(プログラミングの勉強会)-&gt;1日という短期間でゲームのプロトタイプを作り、メンバー内で交流します。</li>
                            <li>マインクラフト(Java版)</li>
                            <li>TRPG(クトゥルフ神話がメイン)</li>
                            <li>ボードゲーム会</li>
                            <li>競技プログラミング-&gt;不定期ですが、コンテストに参加したり勉強会を開いたりします。</li>
                        </ul>
                    </div>
                    <div className={styles.ParagraphMargin}>
                        <h2 className={styles.Header}>Welcome!</h2>
                        <hr className={styles.HorizontalLine}></hr>
                        <p>
                            TNPはプログラミングや制作活動に興味がある人をいつでも募集しています。
                        </p>
                        <p>
                        いつでも見学・加入を歓迎していますので、ご質問がございましたら、「Contact」ページのお問い合わせフォームにてお問い合わせください！
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}