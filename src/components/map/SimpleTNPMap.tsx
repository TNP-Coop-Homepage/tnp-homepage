import styles from "./SimpleTNPMap.module.css";

/**
 * TNP の部室への地図を表示するコンポーネントです。
 * @param props enableDarkMode を true にすると暗い背景によく合います。
 * @example <SimpleTNPMap enableDarkMode={true}/>
 */
export default function SimpleTNPMap(props: SimpleTNPMapProps) {
    return <div>
        <img src="/TNP-Location.min.svg" className={ `${styles.TNPMap} ${props.enableDarkMode ? styles.Dark : styles.Light}` } alt="手形キャンパスの各箇所からTNPの部室への地図"/>
    </div>
}

/**
 * SimpleTNPMap のプロパティです。
 */
export type SimpleTNPMapProps = {
    /**
     * ダークモードを有効にするかどうかを指定します。
     */
    enableDarkMode: boolean;
};
