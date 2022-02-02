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
  // const monsteraPrice = 8;
  // const ivyPrice = 10;
  // const flowerPrice = 15;
  // déclaration du state cart
  // const [cart, updateCart] = useState(0);
  // déclaration du state isOpen
  const [isOpen, setIsOpen] = useState(true);

  // on calcule le total
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.quantity * plantType.price,
    0
  );
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {cart.map(({ name, price, quantity }, index) => (
        <li key={`${name}_${index}`}>
          {name} {price}€ x {quantity}
        </li>
      ))}
      <h3>Total :{total}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
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
