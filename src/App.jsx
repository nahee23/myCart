import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const addToCart = (product, quantity) => {
    setCart([...cart, { product, quantity }]);
  };

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload(); //재시작(새로고침)
      } else {
        setUser(jwtUser);
      }
    } catch (error) {} //토큰이 없을 경우는 그냥 go
  }, []);
  return (
    <div className="app">
      <Navbar user={user} cartCount={cart.length} />
      <main>
        <Routing addToCart={addToCart} />
      </main>
    </div>
  );
}

export default App;
