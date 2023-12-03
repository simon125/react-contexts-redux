import React, { useContext } from "react";

import "./SelectedProducts.scss";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContex";

export const SelectedProducts = () => {
  const { totalPrice, selectedProducts, removeProduct, editAmountProduct } =
    useContext(ShoppingCartContext);

  const products = selectedProducts;

  /**
   * policz cene wszystkich produktów w koszyku
   * uwzględnij też wybraną ilość produktów
   */

  const handleCouterChange = (id, amount) => {
    editAmountProduct(id, amount);
  };

  const handleDeleteClick = (id) => {
    console.log(id);
    removeProduct(id);
    /**
     * funckja usuwająca wskazany element z tablicy "selectedProducts"
     */
  };

  return (
    <article>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && (
            <tr>
              <td className="no-products" colSpan={4}>
                Brak produktów w koszyku
              </td>
            </tr>
          )}
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <input
                  onChange={(event) =>
                    handleCouterChange(product.id, event.target.value)
                  }
                  className="counter"
                  type="number"
                  name=""
                  id=""
                  value={product.amount}
                />
              </td>
              <td>{product.price}</td>
              <td>
                <button
                  onClick={() => handleDeleteClick(product.id)}
                  className="remove-btn"
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}

          {products.length !== 0 && (
            <tr>
              <td></td>
              <td style={{ textAlign: "right" }}>Total:</td>
              <td>
                <b> {totalPrice}$</b>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </article>
  );
};
