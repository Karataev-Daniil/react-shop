import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import products from "../../data/products";
import CategoryButtons from "../../features/catalog/CategoryButtons";
import ProductFilters from "../../features/catalog/ProductFilters";
import ProductGrid from "../../features/catalog/ProductGrid";
import styles from "./HomePage.module.css";

function HomePage() {
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [tagsFilter, setTagsFilter] = useState("all");

    const filteredProducts = products.filter(p => {
        const categoryMatch = categoryFilter === "all" || p.categories.includes(categoryFilter);
        const tagMatch = tagsFilter === "all" || p.tags.includes(tagsFilter);
        return categoryMatch && tagMatch;
    });

    const categories = [...new Set(products.flatMap(p => p.categories))];
    const tags = [...new Set(products.flatMap(p => p.tags))];

    return (
        <main className={styles.home}>
            <Helmet>
                <title>Современная мебель для дома и офиса | Furniture Store</title>
                <meta
                    name="description"
                    content="Furniture Store — современная мебель для дома и офиса. Стулья, диваны, столы и шкафы высокого качества."
                />
                {products[0]?.image && (
                    <meta property="og:image" content={products[0].image} />
                )}
                <meta property="og:title" content="Современная мебель для дома и офиса | Furniture Store" />
                <meta property="og:description" content="Furniture Store — современная мебель для дома и офиса. Стулья, диваны, столы и шкафы высокого качества." />
            </Helmet>

            <section className={styles.hero}>
                <h1>Современная мебель для дома и офиса</h1>
                <p>Комфорт, стиль и качество — в одном месте</p>
            </section>

            <section className={styles.categories}>
                <h2>Категории</h2>
                <CategoryButtons />
            </section>

            <section className={styles.products}>
                <h2>Популярные товары</h2>
                <ProductGrid 
                    products={products} 
                    itemsPerPage={8}
                />
            </section>

            <section className={styles.products}>
                <h2>Поиск по категориям</h2>
                <ProductFilters
                    categories={categories}
                    tags={tags}
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    tagsFilter={tagsFilter}
                    setTagsFilter={setTagsFilter}
                />
                {filteredProducts.length === 0 ? (
                    <div>Ничего не найдено!</div>
                ) : (
                    <ProductGrid 
                        products={filteredProducts} 
                        mode="loadMore"
                    />
                )}
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
