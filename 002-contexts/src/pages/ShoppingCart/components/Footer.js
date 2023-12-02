import React from "react";
import "./Footer.scss";

export const Footer = () => {
  /**
   * products będzie tablicą produktów które pochodza ze stora = to co user wybrał
   */
  const products = [];

  const handleClick = () => {
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
     */
  };

  if (products.length === 0) return null;

  return (
    <article>
      <button
        onClick={undefined /* TUTAJ POWINIEN BYĆ TWÓJ ONCLICK */}
        className="action-button"
      >
        Sfinalizuj transakcje
      </button>
    </article>
  );
};
