import styles from './NavigationLink.module.css';
import Link from "next/link";

type Props = {
    title: string;
    selected: boolean;
    url: string;
    onClick?: () => void;
};

const NavigationPageLink = ({title, selected, url, onClick}: Props) => {
    return (
        <Link className={`${styles.NavigationLinkBase} ${selected ? styles.NavigationLinkSelected : styles.NavigationLink}`} href={url} onClick={onClick}>
            {title}
        </Link>
    );
};

export default NavigationPageLink;