import React from "react";
import styles from "./Logo.module.css";
import Button from "../ui/Button";

function Logo() {
    return (
        <div className={styles.logo}>
            <Button to="/" variant="unstyled">
                Furniture Store
            </Button>
        </div>
    );
}

export default Logo;
