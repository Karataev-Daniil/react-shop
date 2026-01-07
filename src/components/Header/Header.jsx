import React from "react";
import Logo from "../Logo";
import Button from "../../ui/Button/Button";
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.hours}>
                    Ежедневно с 10:00 до 21:00
                </div>

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

            <div className={styles.logoContainer}>
                <Logo />
            </div>
        </header>
    );
}

export default Header;
