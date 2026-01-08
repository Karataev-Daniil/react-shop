import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

function Breadcrumbs({ items }) {
    return (
        <nav className={styles.breadcrumbs}>
            {items.map((item, index) => (
                <span key={index}>
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
