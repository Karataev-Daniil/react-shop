import React from "react";
import Button from "../../ui/Button";
import styles from "./CategoryButtons.module.css";

function CategoryButtons() {
    const categories = [
        { name: "Sofas", path: "sofas" },
        { name: "Armchairs", path: "chairs" },
        { name: "Tables", path: "tables" },
        { name: "Beds", path: "beds" },
        { name: "Chests of Drawers", path: "cabinets" },
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
