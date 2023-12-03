import React, { useEffect, useState } from "react";
import "./ProductsList.scss";
import { Product } from "./Product";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // https://dummyjson.com/products
    // fetch
    // wykonaj request pod podany endpoint
    // zweryfikuj response w konsoli
    // zapisz dane z responsu do satanu lokalnego lub stanu w kontekście
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Coś nie pykło");
        }
      })
      .then((data) => {
        console.log(data);
        console.log(data.products);

        setProducts(data.products);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log("Akcja asynchroniczna dobiegła końca");
      });
  }, []);

  console.log(products);

  return (
    <article className="products-list-container">
      {/* 
        POBRANĄ LISTĘ PRODUKTÓW WYŚWIETL ZA POMOCĄ FUNCKJI .MAP DOSTĘPNEJ NA TABLICACH
        UŻYJ KOMPONENTU Product.js do wysweitlania produktów 
      */}

      {/* {products.map((product) => {
        return (
          <article key={product.id}>
            <p>{product.title}</p>
          </article>
        );
      })} */}

      {/* {products.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            stock={product.stock}
            rating={product.rating}
          />
        );
      })} */}

      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </article>
  );
};
