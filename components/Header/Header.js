import React from "react";

import Container from "@components/Container/Container";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerName}> Hyper Bros Trading Cards</p>
        <p className={styles.headerCart}>
          <button className={`snipcart-checkout ${styles.snipButton}`}>
            <FaShoppingCart />

            <span className="snipcart-total-price"></span>
          </button>
        </p>
      </Container>
    </header>
  );
};

export default Header;
