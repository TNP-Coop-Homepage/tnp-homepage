import { GamePreviewImage } from "./GamePreviewImage"

export type Work = {
    title: string,
    authors: string[],
    images: GamePreviewImage[] | null,
    explanation: string,
    comment: string | null
}