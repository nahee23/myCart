import "./App.css";
import LoginPage from "./components/Authentication/LoginPage";
// import CartPage from "./components/Cart/CartPage";
// import MyOrderPage from "./components/MyOrder/MyOrderPage";
// import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
// import SingleProductPage from "./components/SingleProduct/SingleProductPage";
// import ProductsPage from "./components/Products/ProductsPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        <LoginPage />
      </main>
    </div>
  );
}

export default App;
