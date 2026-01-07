import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../features/product/ProductCard";
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
			<section className={styles.products}>
				<h1>
					{category ? `Категория: ${category}` : "Каталог мебели"}
				</h1>

				<ProductGrid 
					products={productsByCategory} 
					itemsPerPage={36}
				/>
			</section>

			<section className={styles.products}>
                <h2>Поиск по другим категориям</h2>
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
		</main>
	);
}

export default CatalogPage;
