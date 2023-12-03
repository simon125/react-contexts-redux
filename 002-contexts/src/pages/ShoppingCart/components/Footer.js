import React, { useContext } from "react";
import "./Footer.scss";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContex";

export const Footer = () => {
  /**
   * products będzie tablicą produktów które pochodza ze stora = to co user wybrał
   */

  const { selectedProducts, resetProducts } = useContext(ShoppingCartContext);

  const handleClick = () => {
    fetch("https://dummyjson.com/http/200", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedProducts),
    }).finally(() => {
      resetProducts();
    });
    /**
     * POST
     * https://dummyjson.com/http/200
     *
     * napisz funckje wykonującą request http metodą POST
     * użyj wbudowanej funkcji fetch
     * w body wyślij idki produktów któreuser wybrał klikając w ekranie z produktami
     * niech idki będą kluczami a ilość poszczególnych produktów wartością
     * np.
     *
     * {
     *  telefon: 2,
     *  telewizor: 1,
     *  ziemniaki: 20
     * }
     *
     *
     *
     */
  };

  if (selectedProducts.length === 0) return null;

  return (
    <article>
      <button onClick={handleClick} className="action-button">
        Sfinalizuj transakcje
      </button>
    </article>
  );
};
