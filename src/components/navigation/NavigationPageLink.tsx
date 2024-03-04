import styles from './NavigationLink.module.css';
import Link from "next/link";

type Props = {
    title: string,
    selected: boolean,
    url: string,
};

const NavigationPageLink = ({title, selected, url}: Props) => {
    return (
        <Link className={`${styles.NavigationLinkBase} ${selected ? styles.NavigationLinkSelected : styles.NavigationLink}`} href={url}>
            {title}
        </Link>
    );
};

export default NavigationPageLink;