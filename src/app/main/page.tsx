import styles from "./page.module.css"
export default async function Home() {
    return <div className={styles.body}>
                <header className={styles.header}><span className={styles.text_header}>秋田大学プログラミングサークル</span></header>
                <main className={styles.main}>
                    <h1 className={styles.hs}>ようこそ</h1>
                    <p>
                        『秋田大学プログラミングサークルTNP』は秋田大学公認のプログラミング&創作サークルです。
                    </p>
                    <h2 className={styles.hs}>TL;DR: どんなサークル？</h2>
                    <ul>
                        <li>プログラミング技術の向上を目指しゲームを作ります</li>
                        <li>競プロやゲーム、イラスト、音楽など創作と遊びもします</li>
                        <li>大学祭やコミケで創作物を展示します</li>
                    </ul>
                    <h2 className={styles.hs}>もっと詳しく！</h2>
                    {/*(ここにロゴを載せる)*/}
                    <h3 className={styles.TNP}>TNP = *The Next-generation Programmers*</h3>
                    <p>
                        イラストや音楽制作、「マーダーミステリー」や「クトゥルフ神話TRPG」のシナリオ作成など、プログラミング以外でも様々な創作活動を行っているメンバーもいます。いろいろな創作を通して、ものづくりを楽しみましょう!
                    </p>
                    <h2 className={styles.hs}>活動内容</h2>
                    <p>
                        TNPの活動はすべて「創作活動」で、例えば以下の活動があります。
                    </p>
                    <ul>
                        <li>ゲーム制作</li>
                        <li>Webサイト制作</li>
                        <li>競技プログラミング</li>
                        <li>イラスト制作</li>
                        <li>シナリオ制作(TRPG, ノベル)</li>
                        <li>音楽制作(DTM)</li>
                        <li>好きなゲームで遊んだり創作したり</li>
                    </ul>
                    <p>
                        様々な興味を持つメンバーが、多種多様な活動を楽しんでいます。
                    </p>
                    {/*横スクロールするアルバムがあればかっこいいよね*/}
                    <h2 className={styles.hs}>イベント</h2>
                    <p>
                        TNPは普段のゲーム制作以外にも、多くの活動を行っています。
                    </p>
                    <ul>
                        <li>4月: 新メンバーの第1次歓迎会「花見」</li>
                        <li>5月: 新メンバーの第2次歓迎会、「初年次講義」実施</li>
                        <li>7月: 「コミックマーケット夏」に参加</li>
                        <li>10月:「秋大祭」に参加と展示</li>
                        <li>12月:「コミックマーケット冬」に参加</li>
                    </ul>
                    <p>
                        ほかに「追いコン」「ゲームジャム」「TRPG」やゲームなども不定期に行います。
                    </p>
                    <h2 className={styles.hs}>はしがき</h2>
                    <p>
                        ここまでお読みいただきありがとうございました。少しでもTNPに興味を持っていただければ幸いです。
                    </p>
                    <p>
                        TNPは少し個性の強いオタクがかなり多いですが、とてもアットホームな場所で、きっと似たような趣味やプログラミングを行っている人がいると思います。
                    </p>
                    {/*リンクを載せる*/}
                    <p>
                        今までのメンバーの創作物や活動実績は 「About」ページで確認したり、「GameCenter」ページで遊んだりすることができます。
                    </p>
                    <p>
                        活動見学はいつでも大歓迎です！ぜひいつでもいらしてください。
                    </p>
                    {/*リンクを載せる*/}
                    <p>
                        何か質問などがございましたら、「Contact」よりご連絡ください。
                    </p>
                </main>
            </div>
}