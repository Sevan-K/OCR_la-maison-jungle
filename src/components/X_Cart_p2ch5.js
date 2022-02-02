/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */
// on importe le fichier de style pour ce composant
import "../styles/Cart.css";

// on importe useState
import { useState } from "react";

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */
// Création du composant Cart
function Cart({ cart, updateCart }) {
  //  prix des plantes
  const monsteraPrice = 8;
  // const ivyPrice = 10;
  // const flowerPrice = 15;
  // déclaration du state cart
  // const [cart, updateCart] = useState(0);
  // déclaration du state isOpen
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      <div>
        <p>Monstera : {monsteraPrice} €</p>
        {/* <ul>
        <li>Monstera : {monsteraPrice}€</li>
        <li>Lierre : {ivyPrice}€</li>
        <li>Fleurs : {flowerPrice}€</li>
      </ul>
      <p>Total : {monsteraPrice + ivyPrice + flowerPrice}€</p> */}
        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
      </div>
      <h3>Monstera : {monsteraPrice * cart} €</h3>
      <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le panier
      </button>
    </div>
  );
}

/* ----------------------------------------- */
/*            Section des exports            */
/* ----------------------------------------- */
// exort de Cart
export default Cart;
