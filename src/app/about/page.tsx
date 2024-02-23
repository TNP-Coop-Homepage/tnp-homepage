import styles from "./page.module.css"
export default async function About() {
    return <div>
        <title>About</title>
            <h1 className={styles.AboutTitle}>About</h1>
            <div className={styles.IndexText}>
                <h2 className={styles.IndexHeader}>目次</h2>
                <p>
                    サンプルテキストです．こんなもん？
                </p>
            </div>
            <div className={styles.BodyText}>
                <h2 className={styles.BodyHeader}>見出し2</h2>
                <p>
                    段落1
                </p>
                <h2 className={styles.BodyHeader}>見出し3</h2>
                <p>
                    段落1
                </p>
            </div>
    </div>
}