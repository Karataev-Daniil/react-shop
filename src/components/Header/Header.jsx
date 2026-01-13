import React from "react";
import Logo from "../Logo";
import Button from "../../ui/Button/Button";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.hours}>
                    Daily from 10:00 AM to 9:00 PM
                </div>

                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Button to="/orders" variant="link">
                            Orders
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/about" variant="link">
                            About Us
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/catalog" variant="link">
                            Catalog
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/reviews" variant="link">
                            Reviews
                        </Button>
                    </li>
                </ul>
            </div>

            <div className={styles.logoContainer}>
                <Logo />
            </div>
        </header>
    );
}

export default Header;
