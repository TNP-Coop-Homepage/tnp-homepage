import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Link href="/blog" className={styles.backLink}>
        ← ブログ一覧に戻る
      </Link>
      <div className={styles.notFound}>
        <div className={styles.notFoundIcon}>🔍</div>
        <h1 className={styles.notFoundTitle}>記事が見つかりません</h1>
        <p className={styles.notFoundDescription}>
          お探しの記事は存在しないか、削除された可能性があります。<br />
          ブログ一覧から他の記事をご覧ください。
        </p>
        <Link href="/blog" className={styles.notFoundLink}>
          ブログ一覧へ戻る
        </Link>
      </div>
    </div>
  );
}