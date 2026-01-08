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
                <title>Modern Furniture for Home and Office | Furniture Store</title>
                <meta
                    name="description"
                    content="Furniture Store — modern furniture for home and office. High-quality chairs, sofas, tables, and wardrobes."
                />
                {products[0]?.image && (
                    <meta property="og:image" content={products[0].image} />
                )}
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
                <ProductGrid 
                    products={products} 
                    itemsPerPage={8}
                />
            </section>

            <section className={styles.products}>
                <h2>Browse by Categories</h2>
                <ProductFilters
                    categories={categories}
                    tags={tags}
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                    tagsFilter={tagsFilter}
                    setTagsFilter={setTagsFilter}
                />
                {filteredProducts.length === 0 ? (
                    <div>No results found!</div>
                ) : (
                    <ProductGrid 
                        products={filteredProducts} 
                        mode="loadMore"
                    />
                )}
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
