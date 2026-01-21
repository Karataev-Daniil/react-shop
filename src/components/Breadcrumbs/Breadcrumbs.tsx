import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

type BreadcrumbsItem = {
    label : string
    to? : string
}

type BreadcrumbsProps = {
    items : BreadcrumbsItem[]
}

function Breadcrumbs({ items }: BreadcrumbsProps){
    return (
        <nav className={styles.breadcrumbs}>
            {items.map((item, index) => (
                <span key={item.label}>
                    {item.to ? (
                        <Link to={item.to}>{item.label}</Link>
                    ) : (
                        <span className={styles.current}>{item.label}</span>
                    )}
                    {index < items.length - 1 && " / "}
                </span>
            ))}
        </nav>
    );
}

export default Breadcrumbs;
