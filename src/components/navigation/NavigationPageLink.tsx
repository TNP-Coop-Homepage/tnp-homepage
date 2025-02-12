import styles from './NavigationLink.module.css';
import Link from "next/link";
import {useNavigationOpen} from "@/contexts/NavigationOpenContext";

type Props = {
    title: string,
    selected: boolean,
    url: string,
};

const NavigationPageLink = ({title, selected, url}: Props) => {

    const { toggleOpen } = useNavigationOpen();

    return (
        <Link onClick={toggleOpen} className={`${styles.NavigationLinkBase} ${selected ? styles.NavigationLinkSelected : styles.NavigationLink}`} href={url}>
            {title}
        </Link>
    );
};

export default NavigationPageLink;