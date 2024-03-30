import Image from "next/image";
import styles from "./HeaderImage.module.css"
import headerImage from "/public/TNPheader.webp";

export default function HeaderImage() {
  return <header className={styles.HeaderImageWrapper}>
    <Image src={headerImage} alt="" style={{
      objectFit: "cover",
      width: "100%",
      height: "100%",
    }} sizes="100vw" placeholder="blur" priority/>
    <div className={styles.HeaderImageOverlay}>
      <p className={styles.HeaderImageText}>秋田大学プログラミングサークル</p>
    </div>
  </header>;
}