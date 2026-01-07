import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../features/product/ProductCard";
import products from "../../data/products";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
	const { category } = useParams();
	
	const filteredProducts = category
	  ? products.filter(p => p.categories.includes(category))
	  : products;


	return (
		<main className={styles.catalog}>

			<h1>
				{category ? `Категория: ${category}` : "Каталог мебели"}
			</h1>

			<div className={styles.productsGrid}>
				{filteredProducts.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						image={product.image}
						name={product.name}
						price={product.price}
					/>
				))}
			</div>

		</main>
	);
}

export default CatalogPage;
