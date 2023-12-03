import React, { useContext } from "react";
import "./Product.scss";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContex";

/**
 *
 * Stwórz komponent Produkt który wywietli dane zgodnie z dostępnym designem
 * komponent powinien przyjmować dane z propsów
 *
 */

// export const Product = () => {
//   return <div className="product-container">hej</div>;
// };

export const Product = (props) => {
  /**
   <Product
    key={product.id}
    title={product.title}
    price={product.price}
    thumbnail={product.thumbnail}
    />

    <Product
      key={product.id}
      product={product}
    />
 */

  const { title, price, thumbnail, stock, rating, id } = props.product;

  const { addProduct, selectedProducts } = useContext(ShoppingCartContext);

  const isProductInCart = selectedProducts.some(
    (selectedProduct) => selectedProduct.id === id
  );

  return (
    <div className="product-container">
      <p>
        Name: <b>{title}</b>
      </p>
      <p>
        Price: <b>{price}</b>
      </p>
      <p>
        Stock: <b>{stock}</b>
      </p>
      <p>
        Rating: <b>{rating}</b>
      </p>
      <div className="thumbnail-container">
        <img src={thumbnail} className="thumbnail" alt={title} />
      </div>
      <button
        disabled={isProductInCart}
        onClick={() => addProduct(props.product)}
      >
        Dodaj do koszyka
      </button>
    </div>
  );
};
