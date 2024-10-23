import Home from "./components/Home";
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  let user = "kesavan"
  return (
    <div className="app">      
      <Router>
        <ol>
          <li> <Link to="/" > Home </Link> </li>
          <li> <Link to="/products" > Products </Link> </li>
          <li> <Link to={`/login/${user}`} > Login </Link> </li>
          <li> <Link to="/sign-up" > SignUp </Link> </li>
          <li> <Link to="/todo" > TodoApp </Link> </li>
        </ol>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} >
            <Route index element={ <ProductList/> } />
            <Route  path="list" element={<ProductList/>}/>
            <Route path="details" element={<ProductDetails/>}/>
          </Route>
          <Route path="/login/:newUser" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
