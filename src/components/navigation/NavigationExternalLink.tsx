import styles from "./NavigationLink.module.css";

type Props = {
    title: string,
    url: string,
};

const NavigationExternalLink = ({ title, url }: Props) => {
    return (
        <a className={`${styles.NavigationLinkBase} ${styles.NavigationLink}`} href={url} target={"_blank"} rel={"noopener noreferrer"}>
            {title}
        </a>
    );
};

export default NavigationExternalLink;