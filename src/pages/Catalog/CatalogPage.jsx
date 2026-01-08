import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
            <Helmet>
                {category ? (
                    <>
                        <title>Catalog: {category} | Furniture Store</title>
                        <meta 
                            name="description" 
                            content={`All products in the ${category} category at Furniture Store — modern, high-quality, and comfortable.`} 
                        />
                        {productsByCategory[0]?.image && (
                            <meta property="og:image" content={productsByCategory[0].image} />
                        )}
                        <meta property="og:title" content={`Catalog: ${category} | Furniture Store`} />
                        <meta property="og:description" content={`All products in the ${category} category at Furniture Store — modern, high-quality, and comfortable.`} />
                    </>
                ) : (
                    <>
                        <title>Furniture Catalog | Furniture Store</title>
                        <meta 
                            name="description" 
                            content="Furniture Store catalog — a wide selection of chairs, tables, sofas, and wardrobes for home and office." 
                        />
                        {productsByCategory[0]?.image && (
                            <meta property="og:image" content={productsByCategory[0].image} />
                        )}
                        <meta property="og:title" content="Furniture Catalog | Furniture Store" />
                        <meta property="og:description" content="Furniture Store catalog — a wide selection of chairs, tables, sofas, and wardrobes for home and office." />
                    </>
                )}
            </Helmet>

            <section className={styles.categoryHeader}>
                <h1 className={styles.title}>
                    {category ? `Category: ${category}` : "Furniture Catalog"}
                </h1>
            </section>

            <section className={styles.productsSection}>
                <h2 className={styles.sectionTitle}>Products in Category</h2>
                <ProductGrid 
                    products={productsByCategory} 
                    itemsPerPage={36}
                />
            </section>

            <section className={styles.filtersSection}>
                <h2 className={styles.sectionTitle}>Browse Other Categories</h2>

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
                    <div className={styles.noResults}>No results found!</div>
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
