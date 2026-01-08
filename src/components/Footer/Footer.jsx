import React from "react";
import styles from "./Footer.module.css";
import Button from "../../ui/Button/Button";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topSection}>
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
                        <Button to="/buyers" variant="link">
                            For Buyers
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/reviews" variant="link">
                            Reviews
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/contacts" variant="link">
                            Contacts
                        </Button>
                    </li>
                </ul>
            </div>

            <div className={styles.bottomSection}>
                <p>© 2025 Furniture Store. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
