import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContex";

export const Footer = () => {
  /**
   * Sprawdz jaka jest cena wszystkich produktów w koszyku i przypisz ją do zmiennej total
   * zmienna total jest wyświetlana userowi
   */

  // const ceny = [123, 321, 543, 567];

  // const total = ceny.reduce((acc, element) => {
  //   return acc + element;
  // }, 0);

  const { totalPrice } = useContext(ShoppingCartContext);

  // if (total === 0) return null;
  if (totalPrice === 0) return null;

  return (
    <article className="footer">
      <div className="container">
        <p>
          Total: <b>{totalPrice}$</b>
        </p>
        <Link className="link" role="button" to="/shopping-cart">
          Przejdź do koszyka
        </Link>
      </div>
    </article>
  );
};
