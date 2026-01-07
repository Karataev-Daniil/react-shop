import React from "react";
import Button from "../../ui/Button/Button";
import styles from "./CategoryButtons.module.css";

function CategoryButtons() {
    const categories = [
        { name: "Диваны", path: "sofas" },
        { name: "Кресла", path: "chairs" },
        { name: "Столы", path: "tables" },
        { name: "Кровати", path: "beds" },
        { name: "Комоды", path: "cabinets" },
    ];

    return (
        <div className={styles.categoryGrid}>
            {categories.map(c => (
                <Button key={c.path} to={`/catalog/${c.path}`} className={styles.categoryCard}>
                    {c.name}
                </Button>
            ))}
        </div>
    );
}

export default CategoryButtons;
