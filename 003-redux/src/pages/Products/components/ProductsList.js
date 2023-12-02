import React, { useEffect, useState } from "react";
import "./ProductsList.scss";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        /*
        zwerfyikuj co jest w konsoli - co się pobiera - następnie przypisz dane (tablice produktów)
        do stanu products
        */
        console.log(data);
      });
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
