// on importe useState
import { useState } from "react";

// import du style css
import "../styles/Footer.css";

// création du composant
const Footer = () => {
  // on déclare inputValue
  const [inputValue, setInputValue] = useState("");
  // function to handle
  function handleInput(event) {
    setInputValue(event.target.value);
  }
  // function to handle blur event
  function handleBlur(event) {
    if (!event.target.value.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.");
    }
  }
  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passonné.e.s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        <label htmlFor="email"> Laissez nous votre mail :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={inputValue}
          onChange={handleInput}
          // onChange={(event) => setInputValue(event.target.value)}
          onBlur={handleBlur}
        />
      </div>
    </footer>
  );
};

// on exporte Footer
export default Footer;
