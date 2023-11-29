import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products/Products";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { Lecture } from "./pages/Lecture/Lecture";
import { Lecture as LectureContexts } from "./pages/Lecture/Lecture_contexts";
import { TodoForm } from "./pages/Todolist/components/TodoForm";
import { TodoTable } from "./pages/Todolist/components/TodoTable";

export const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/lecture-contexts" element={<LectureContexts />} />

        <Route path="/add-todo" element={<TodoForm />} />
        <Route path="/todos" element={<TodoTable />} />
      </Routes>
    </main>
  );
};
