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
import { useEffect, useState } from "react";

// on créer le composant principal App
// on fait remonter cart et update cart dans app.js
function App() {
  /*   //  ma solution pour le local storage :
  // on déclare le state cart
  const [cart, updateCart] = useState([]);
  // const [isFooterShown, updateIsFooterShown] = useState(true);

  // useEffect pour construire le panier à partir du localStorage le cas échéant
  useEffect(() => {
    // variable avec le panier de travail à construire
    let cartToBuild = [];
    for (let i = 0; i < localStorage.length; i++) {
      // on récupère la clée correspondante
      let itemKey = localStorage.key(i);
      // on ajoute l'article au panier
      cartToBuild.push(JSON.parse(localStorage.getItem(itemKey)));
    }
    // une fois le panier de travail consrtuit on l'utilise pour mettre à jour la panier
    updateCart(cartToBuild);
  }, []);

  // on va utiliser un useEffect pour stocker le panier dans le local storage à chaque fois qu'il est modifié
  useEffect(() => {
    console.log("panier :", cart);
    localStorage.clear();
    cart.forEach((item) => {
      localStorage.setItem(item.name, JSON.stringify(item));
    });
    console.log("localStorage", localStorage);
  }, [cart]); */

  // solution du cours pour le local storage (plus courte...)
  // on récupère le contenu du local storage
  const storedCart = localStorage.getItem("cart");
  // on itinialise le cart : il est égal au storedCart s'il n'est pas null et [] sinon
  const [cart, updateCart] = useState(storedCart ? JSON.parse(storedCart) : []);
  // on utilise un useEffect pour mettre à jour le localStorage dès que cart est modifié
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="lmj-app-wrapper">
      <Banner />
      <main className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </main>
      {/* <button onClick={() => updateIsFooterShown(!isFooterShown)}>
        Cacher/Afficher le footer
      </button> */}
      {/* {isFooterShown && <Footer cart={cart} />} */}
      <Footer />
    </div>
  );
}

// on exporte App
export default App;
