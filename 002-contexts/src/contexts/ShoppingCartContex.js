import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = (props) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addProduct = (newProduct) => {
    // newProduct.amount = 1;
    // setSelectedProducts((prevProducts) => [...prevProducts, newProduct]);
    setSelectedProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, amount: 1 },
    ]);
  };

  // const removeProduct = (idToDelete) => {
  //   setSelectedProducts((prevProducts) =>
  //     prevProducts.filter((product) => {
  //       if (idToDelete === product.id) {
  //         return false;
  //       } else {
  //         return true;
  //       }
  //     })
  //   );
  //   /* ustawienie nowej tablicy selectedProducts bez klikniętego elementu */
  // };

  const removeProduct = (idToDelete) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => idToDelete !== product.id)
    );
    /* ustawienie nowej tablicy selectedProducts bez klikniętego elementu */
  };

  const editAmountProduct = (id, newAmount) => {
    if (newAmount * 1 >= 1 && !isNaN(newAmount)) {
      setSelectedProducts((prevProducts) =>
        prevProducts.map((product) => {
          if (id === product.id) {
            return { ...product, amount: newAmount };
          }

          return product;
        })
      );
    }
  };

  const resetProducts = () => {
    setSelectedProducts([]);
  };

  const getTotalPrice = () => {
    return selectedProducts.reduce((totalPrice, product) => {
      return totalPrice + product.price * product.amount;
    }, 0);
  };

  const totalPrice = getTotalPrice();

  console.table(selectedProducts);

  return (
    <ShoppingCartContext.Provider
      value={{
        selectedProducts,
        addProduct,
        removeProduct,
        editAmountProduct,
        resetProducts,
        trelemorele: "Hej kup se klej",
        totalPrice,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
