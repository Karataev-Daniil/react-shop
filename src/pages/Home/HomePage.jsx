import React from "react";
import ProductCard from "../../features/product/ProductCard";
import products from "../../data/products";

import Button from "../../ui/Button/Button";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <main className={styles.home}>

            <section className={styles.hero}>
                <h1>Современная мебель для дома и офиса</h1>
                <p>Комфорт, стиль и качество — в одном месте</p>
            </section>

            <section className={styles.categories}>
                <h2>Категории</h2>

                <div className={styles.categoryGrid}>
                    <Button to="/catalog/sofas" className={styles.categoryCard}>
                        Диваны
                    </Button>

                    <Button to="/catalog/chairs" className={styles.categoryCard}>
                        Кресла
                    </Button>

                    <Button to="/catalog/tables" className={styles.categoryCard}>
                        Столы
                    </Button>

                    <Button to="/catalog/beds" className={styles.categoryCard}>
                        Кровати
                    </Button>

                    <Button to="/catalog/cabinets" className={styles.categoryCard}>
                        Комоды
                    </Button>
                </div>
            </section>

            <section className={styles.products}>
                <h2>Популярные товары</h2>

                <div className={styles.productsGrid}>
                    {products.slice(0, 8).map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.advantages}>
                <div className={styles.advantage}>🚚 Быстрая доставка</div>
                <div className={styles.advantage}>🛠 Гарантия качества</div>
                <div className={styles.advantage}>💳 Удобная оплата</div>
            </section>

        </main>
    );
}

export default HomePage;
