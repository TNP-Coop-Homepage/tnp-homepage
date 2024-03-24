/**
 * カラーコードの色を反転します。filter: invert(1) と同様の変換を行います。
 * @param colorCode 反転したい色のカラーコード。#ffffff の形式で、シャープを省略してはいけません。
 */
export default function InvertHexColor(colorCode: string) {
    const Invert = (hex: string) => parseInt("FF", 16) - parseInt(hex, 16);
    return Invert(colorCode.substring(1, 3)) + Invert(colorCode.substring(3, 5)) + Invert(colorCode.substring(5, 7));
}