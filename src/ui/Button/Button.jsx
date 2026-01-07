import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Button.module.css";

function Button({
    to,
    href,
    external = false,
    onClick,
    children,
    variant = "minimal",
    className = "",
    ...props
}) {
    const classNames = `${styles.btn} ${styles[variant]} ${className}`.trim();

    if (href || external) {
        return (
            <a
                href={href || to}
                className={classNames}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {children}
            </a>
        );
    }

    if (to) {
        return (
            <RouterLink
                to={to}
                className={classNames}
                {...props}
            >
                {children}
            </RouterLink>
        );
    }

    return (
        <button
            onClick={onClick}
            className={classNames}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
