import React, { useEffect, useState } from "react";
import "./ProductsList.scss";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // https://dummyjson.com/products
    // wykonaj request pod podany endpoint
    // zweryfikuj response w konsoli
    // zapisz dane z responsu do satanu lokalnego lub stanu w kontekście
  }, []);

  return (
    <article className="products-list-container">
      {/* 
        POBRANĄ LISTĘ PRODUKTÓW WYŚWIETL ZA POMOCĄ FUNCKJE .MAP DOSTĘPNEJ NA TABLICACH
        UŻYJ KOMPONENTU Product.js do wysweitlania produktów 
    */}
    </article>
  );
};
