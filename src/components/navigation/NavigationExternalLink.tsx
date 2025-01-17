import styles from "./NavigationLink.module.css";

type Props = {
    title: string;
    url: string;
    onClick?: () => void;
};

const NavigationExternalLink = ({ title, url, onClick }: Props) => {
    return (
        <a className={`${styles.NavigationLinkBase} ${styles.NavigationLink}`} href={url} target={"_blank"} rel={"noopener noreferrer"} onClick={onClick}>
            {title}
        </a>
    );
};

export default NavigationExternalLink;