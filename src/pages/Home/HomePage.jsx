import React from "react";
import { Helmet } from "react-helmet-async";
import products from "../../data/products";
import CategoryButtons from "../../features/catalog/CategoryButtons";
import FilteredProducts from "../../features/catalog/FilteredProducts";
import ProductGrid from "../../features/catalog/ProductGrid";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <main className={styles.home}>
            <Helmet>
                <title>Modern Furniture for Home and Office | Furniture Store</title>
                <meta
                    name="description"
                    content="Furniture Store — modern furniture for home and office. High-quality chairs, sofas, tables, and wardrobes."
                />
                {products[0]?.image && (
                    <meta property="og:image" content={products[0].image} />
                )}
                <link rel="icon" href="/favicon.ico?v=1" type="image/x-icon" />
                <meta property="og:title" content="Modern Furniture for Home and Office | Furniture Store" />
                <meta property="og:description" content="Furniture Store — modern furniture for home and office. High-quality chairs, sofas, tables, and wardrobes." />
            </Helmet>

            <section className={styles.hero}>
                <h1>Modern Furniture for Home and Office</h1>
                <p>Comfort, style, and quality — all in one place</p>
            </section>

            <section className={styles.categories}>
                <h2>Categories</h2>
                <CategoryButtons />
            </section>

            <section className={styles.products}>
                <h2>Popular Products</h2>
                <ProductGrid products={products} itemsPerPage={8} />
            </section>

            <section className={styles.products}>
                <h2>Browse by Categories</h2>
                <FilteredProducts products={products} />
            </section>

            <section className={styles.advantages}>
                <div className={styles.advantage}>🚚 Fast Delivery</div>
                <div className={styles.advantage}>🛠 Quality Guarantee</div>
                <div className={styles.advantage}>💳 Convenient Payment</div>
            </section>
        </main>
    );
}

export default HomePage;
