import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { Lecture } from "./pages/Lecture/Lecture";

export const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/lecture" element={<Lecture />} />
      </Routes>
    </main>
  );
};
