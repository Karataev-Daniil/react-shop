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
    disabled = false,
    ...props
}) {
    const classNames = `${styles.btn} ${styles[variant]} ${disabled ? styles.disabled : ""} ${className}`.trim();

    if (href || external) {
        return (
            <a
                href={disabled ? undefined : href || to}
                className={classNames}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={disabled ? (e) => e.preventDefault() : onClick}
                {...props}
            >
                {children}
            </a>
        );
    }

    if (to) {
        return (
            <RouterLink
                to={disabled ? "#" : to}
                className={classNames}
                onClick={disabled ? (e) => e.preventDefault() : onClick}
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
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
