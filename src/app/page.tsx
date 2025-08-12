import Link from "next/link";
import styles from "./page.module.css";
import { CONTACT_FORM_URL } from "@/consts/CONTACT_FORM_URL";
import HeaderImage from "@/components/headerImage/HeaderImage";
import "./globals.css";

export default async function Home() {
  return (
    <div className={styles.body}>
      <HeaderImage />
      <main className={"main"}>
        <title>{"秋田大学プログラミングサークルTNP"}</title>
        <h1 className={"hs"}>ようこそ</h1>
        <div className="level-1">
          <p className={"p_first"}>
            <strong>『秋田大学プログラミングサークルTNP』</strong>
            は秋田大学公認のプログラミング&創作サークルです。
          </p>
        </div>

        <h2 className={"hs"}>TL;DR: どんなサークル？</h2>
        <div className="level-2">
          <ul>
            <li>プログラミング技術の向上を目指しゲームを作ります</li>
            <li>競プロやゲーム、イラストや音楽などの創作、遊びもします</li>
            <li>大学祭やコミケで創作物を展示します</li>
          </ul>
        </div>

        <h2 className={"hs"}>もっと詳しく！</h2>
        <div className="level-2">
          {/*(ここにロゴを載せる)*/}
          <h3 className={"hs TNP"}>TNP = *The Next-generation Programmers*</h3>
          <div className="level-3">
            <p>
              イラストや音楽制作、「マーダーミステリー」や「クトゥルフ神話TRPG」のシナリオ作成など、プログラミング以外でも様々な創作活動を行っているメンバーもいます。いろいろな創作を通して、ものづくりを楽しみましょう！
            </p>
          </div>
        </div>

        <h2 className={"hs"}>活動内容</h2>
        <div className="level-2">
          <p>TNPの活動はすべて「創作活動」で、例えば以下の活動があります。</p>
          <ul>
            <li>ゲーム制作</li>
            <li>Webサイト制作</li>
            <li>競技プログラミング</li>
            <li>イラスト制作</li>
            <li>シナリオ制作(TRPG, ノベル)</li>
            <li>音楽制作(DTM)</li>
            <li>好きなゲームで遊んだり創作したり</li>
          </ul>
          <p>様々な興味を持つメンバーが、多種多様な活動を楽しんでいます。</p>
        </div>

        {/*横スクロールするアルバムがあればかっこいいよね*/}
        <h2 className={"hs"}>イベント</h2>
        <div className="level-2">
          <p>TNPは普段のゲーム制作以外にも、多くの活動を行っています。</p>
          <ul>
            <li>4月: 新メンバーの第1次歓迎会「花見」の実施</li>
            <li>5月: 新メンバーの第2次歓迎会と「初年次講義」実施</li>
            <li>7月: 「コミックマーケット夏」に参加</li>
            <li>10月:「秋大祭」に参加と展示</li>
            <li>12月:「コミックマーケット冬」に参加</li>
          </ul>
          <p>
            他には年に一度の「追いコン」「ゲームジャム」や、不定期に行う「TRPG」やゲームなどもあります。
          </p>
        </div>

        <h2 className={"hs"}>はしがき</h2>
        <div className="level-2">
          <p>
            ここまでお読みいただきありがとうございました。少しでもTNPに興味を持っていただければ幸いです。
          </p>
          <p>
            TNPは少し個性の強いオタクがかなり多いですが、とてもアットホームな環境で、似た趣味を持つ人、同じ方向性で創作に臨む人がいると思います。
            <br />
            TNPの詳しい活動内容は「<a href="/about">About</a>
            」ページで見ることができ、「<a href="/works">Works</a>
            」ページでは過去の創作物を見ることができます。
            <br />
          </p>
          <p>
            活動見学はいつでも大歓迎です！ぜひいつでもいらしてください。
            <br />
            何か質問などがございましたら、「
            <Link
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </Link>
            」よりご連絡ください。
          </p>
        </div>
      </main>
    </div>
  );
}
