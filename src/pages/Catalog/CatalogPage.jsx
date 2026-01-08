import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";

import ProductGrid from "../../features/catalog/ProductGrid";
import ProductFilters from "../../features/catalog/ProductFilters";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
    const { category } = useParams();

    const productsByCategory = category
        ? products.filter(p => p.categories.includes(category))
        : products;

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
        <main className={styles.catalog}>
            <section className={styles.categoryHeader}>
                <h1 className={styles.title}>
                    {category ? `Категория: ${category}` : "Каталог мебели"}
                </h1>
            </section>

            <section className={styles.productsSection}>
                <h2 className={styles.sectionTitle}>Товары категории</h2>
                <ProductGrid 
                    products={productsByCategory} 
                    itemsPerPage={36}
                />
            </section>

            <section className={styles.filtersSection}>
                <h2 className={styles.sectionTitle}>Поиск по другим категориям</h2>

                <div className={styles.filtersWrapper}>
                    <ProductFilters
                        categories={categories}
                        tags={tags}
                        categoryFilter={categoryFilter}
                        setCategoryFilter={setCategoryFilter}
                        tagsFilter={tagsFilter}
                        setTagsFilter={setTagsFilter}
                    />
                </div>

                {filteredProducts.length === 0 ? (
                    <div className={styles.noResults}>Ничего не найдено!</div>
                ) : (
                    <ProductGrid 
                        products={filteredProducts} 
                        mode="loadMore"
                    />
                )}
            </section>
        </main>
    );
}

export default CatalogPage;
