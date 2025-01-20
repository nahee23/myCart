import "./App.css";
// import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
// import ProductsPage from "./components/Products/ProductsPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        <SingleProductPage />
      </main>
    </div>
  );
}

export default App;
