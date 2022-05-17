import { InsertBook } from "./Components/InsertBook";
import { NavBar } from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { BookList } from "./Components/BookList";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/get_book" element={<BookList />}></Route>
        <Route path="/insert_book" element={<InsertBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
