// import du composant Banner
import Banner from "./Banner";

// import du composant Cart
import Cart from "./Cart";

// import du composant ShoppingList
import ShoppingList from "./ShoppingList";

// import du composant Footer
import Footer from "./Footer";

// import du style pour le layout
import "../styles/layout.css";
import { useState } from "react";

// on créer le composant principal App
// on fait remonter cart et update cart dans app.js
function App() {
  // on déclare le state cart
  const [cart, updateCart] = useState([]);
  return (
    <div className="lmj-app-wrapper">
      <Banner />
      <main className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </main>

      <Footer />
    </div>
  );
}

// on exporte App
export default App;
