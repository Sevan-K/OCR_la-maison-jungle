/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */

// on importe le fichier de style pour ce composant
import "../styles/Banner.css";

// on importe le logo
import logo from "../assets/logo.png";

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */
// création du composant Banner
function Banner() {
  const bannerTitle = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt={bannerTitle} className="lmj-banner__logo" />
      <h1 className="lmj-banner__title">{bannerTitle}</h1>
    </div>
  );
}

// en utilisant la props children
// function Banner({ children }) {
//   return <div className="lmj-banner">{children}</div>;
// }

/* ----------------------------------------- */
/*            Section des exports            */
/* ----------------------------------------- */
// on exporte Le composant
export default Banner;
