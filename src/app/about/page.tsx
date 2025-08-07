"use client";

import Iframe from "react-iframe";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./page.module.css";
import SimpleTNPMap from "@/components/map/SimpleTNPMap";
import { CONTACT_FORM_URL } from "@/consts/CONTACT_FORM_URL";
import HeaderImage from "@/components/headerImage/HeaderImage";

export default function About() {
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <div className={styles.Background}>
      <HeaderImage />
      <main className={"main"}>
        <title>{"About - 秋田大学プログラミングサークルTNP"}</title>
        <h1 className={"hs"}>About</h1>

        <h2 className={"hs"}>TNPへようこそ</h2>
        <div className="level-2">
          <p>
            「秋田大学プログラミングサークルTNP」は秋田大学公認サークルです。
          </p>
          <p>
            TNPは、「The Next-generation
            Programmers」の略称で、次世代の第1線で活躍できる人材になってほしいという願いが込められています。プログラミング技術の向上を目指し、ゲーム制作を中心に活動しています。
          </p>
          <p>プログラミング初心者という人でも心配はいりません。</p>
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

        <h2 className={"hs"}>活動内容</h2>
        <div className="level-2">
          <ul className={styles.UnorderedList}>
            <li>制作したゲームをコミックマーケットに出品(8月、12月)</li>
            <li>
              イラスト制作(コミックマーケットのサークルカット、サークル紹介のチラシデザインなど)
            </li>
            <li>
              競技プログラミング(課題解決のためのプログラムを速く、正確に記述する競技のこと)
            </li>
            <li>シナリオ制作(TRPG、ノベル)</li>
            <li>音楽制作(DTM)</li>
            <li>好きなゲームで遊んだり創作したり(Minecraftなど)</li>
          </ul>
        </div>

        <h2 className={"hs"}>活動時間</h2>
        <div className="level-2">
          <p>
            TNPは、毎週水曜日と金曜日の17:00～18:30に「サークル棟部室」の2階で活動しています。
          </p>
          <p>
            <Iframe
              url={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d322.5534641710882!2d140.13480373670654!3d39.724757162846565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8fc298e534e24d%3A0xd57758679f66e202!2z44CSMDEwLTA4NTIg56eL55Sw55yM56eL55Sw5biC5omL5b2i5a2m5ZyS55S677yRIOOCteODvOOCr-ODq-ajnw!5e0!3m2!1sja!2sjp!4v1709558116298!5m2!1sja!2sjp"
              }
              max-width="800"
              width="80%"
              height={(windowHeight / 2).toString()}
              styles={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </p>
          <SimpleTNPMap enableDarkMode={false}></SimpleTNPMap>
          <p>
            上記の画像の緑色で示すところが部室です。いつでも見学を受け付けていますので、ぜひお越しください！
          </p>
        </div>

        <h2 className={"hs"}>イベント</h2>
        <div className="level-2">
          <h3 className={`${styles.BodySubHeader} hs`}>4月</h3>
          <div className="level-3">
            <p>「桜を見る会」</p>
            <p>
              新入部員の第一次歓迎会でもある「花見」は、千秋公園に桜を見に行きます。当日天候が悪い場合は、サークル棟でボードゲームなどをして遊んでいます。
            </p>
            <p>
              <s>
                しかし大抵は、なぜか当日天候が悪くなってしまい、部室で「花見」(とボードゲーム)を行っています。
              </s>
            </p>
          </div>
          <h3 className={`${styles.BodySubHeader} hs`}>5月</h3>
          <div className="level-3">
            <p>「新入生歓迎会」</p>
            <p>
              昨年は、焼き肉を食べに行った後、カラオケに行きました。こうした交流を通じて、親睦を深めています。
            </p>
            <p>「初年次講義」</p>
            <p>
              TNPに加入するメンバーの人数が確定してきたら、初年次講義を行います。C++
              を使ったプログラミングや、プログラミング全般の知識を学びます。コーディングなしでゲームを作ることも可能ですが、全員がある程度の技術を身につけることを目的としています。このため、5月以外にも随時行います。
            </p>
          </div>
          <h3 className={`${styles.BodySubHeader} hs`}>7月</h3>
          <div className="level-3">
            <p>「コミックマーケット夏」</p>
            <p>
              コミックマーケット(コミケ)に秋田大学TNPとして参加します。これまで作ってきたゲームを活動してきた成果として、コミケで販売しています。ちなみにコミケとは、世界最大級の同人誌即売会のことです。
            </p>
          </div>
          <h3 className={`${styles.BodySubHeader} hs`}>10月</h3>
          <div className="level-3">
            <p>「秋大祭」</p>
            <p>
              秋大祭(いわゆる大学祭)では、ゲームの展示や試遊会を行い、毎年多くの地域の方々に遊んでいただいています。また、秋大祭が終わったら打ち上げとしてみんなで飲みに行きます。
            </p>
          </div>
          <h3 className={`${styles.BodySubHeader} hs`}>12月</h3>
          <div className="level-3">
            <p>「コミックマーケット冬」</p>
            <p>
              コミックマーケットは、年2回開催されており、TNPは両方に参加しています。こちらでもゲームを活動成果として、コミックマーケットで頒布・販売します。
            </p>
          </div>
          <h3 className={`${styles.BodySubHeader} hs`}>3月</h3>
          <div className="level-3">
            <p>「追いコン」</p>
            <p>
              追いコンとは、4年生を追い出すコンペ(食事会)の略称です。就職活動を終え、秋田大学を卒業するTNPの先輩をこの飲み会を通して送り出します。
            </p>
          </div>
          <h3 className={`${styles.BodySubHeader} hs`}>不定期開催</h3>
          <div className="level-3">
            <p>
              TNPでは、その他にもメンバー同士の交流またはメンバーのプログラミング技術向上を目的として活動時間外に集まって、作業したり遊んだりすることがあります。主に活動日の活動後や休日に行うことが多いです。
            </p>
            <ul className={styles.UnorderedList}>
              <li>
                ゲームジャム(プログラミングの勉強会)→1日という短期間でゲームのプロトタイプを作り、メンバー内で交流します。
              </li>
              <li>マインクラフト(Java版)</li>
              <li>TRPG(クトゥルフ神話がメイン)</li>
              <li>ボードゲーム会</li>
              <li>
                競技プログラミング→不定期ですが、コンテストに参加したり勉強会を開いたりします。
              </li>
            </ul>
          </div>
        </div>

        <h2 className={"hs"}>Welcome!</h2>
        <div className="level-2">
          <p>
            TNPはプログラミングや制作活動に興味がある人をいつでも募集しています。
          </p>
          <p>
            いつでも見学・加入を歓迎していますので、ご質問がございましたら、「
            <Link
              className={`${styles.LinkText}`}
              href={CONTACT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </Link>
            」ページのお問い合わせフォームにてお問い合わせください！
          </p>
        </div>
      </main>
    </div>
  );
}
