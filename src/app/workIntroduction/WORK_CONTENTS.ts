import { GamePreviewImage } from "@/types/GamePreviewImage"
import { Work } from "@/types/Work"

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

export const works: Work[] = [Corelynx, Vergilius]