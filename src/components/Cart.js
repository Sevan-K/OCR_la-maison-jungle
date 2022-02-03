/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */
// on importe le fichier de style pour ce composant
import "../styles/Cart.css";

// on importe useState et useEffect
import { useState, useEffect } from "react";

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */
// Création du composant Cart
function Cart({ cart, updateCart }) {
  // déclaration du state isOpen
  const [isOpen, setIsOpen] = useState(true);

  // on calcule le total
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.quantity * plantType.price,
    0
  );

  // function to handle click
  function handleClick(name) {
    updateCart(cart.filter((item) => item.name !== name));
  }

  //  on déclare le useEffect
  useEffect(() => {
    document.title = `LMJ 🌱 : ${total}€ d'achat`;
  }, [total]);

  // return avec le coeur du composant
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
          <span>
            {name} {price}€ x {quantity}
          </span>
          <button
            className="lmj-cart-toggle-button lmj-cart-delete-button"
            onClick={() => handleClick(name)}
          >
            Retirer
          </button>
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
