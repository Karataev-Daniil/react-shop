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
                            Заказы
                        </Button>
                    </li>
                    
                    <li className={styles.navItem}>
                        <Button to="/about" variant="link">
                            О компании
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/catalog" variant="link">
                            Каталог
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/buyers" variant="link">
                            Покупателям
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/reviews" variant="link">
                            Отзывы
                        </Button>
                    </li>

                    <li className={styles.navItem}>
                        <Button to="/contacts" variant="link">
                            Контакты
                        </Button>
                    </li>
                </ul>
            </div>

            <div className={styles.bottomSection}>
                <p>© 2025 Furniture Store. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;
