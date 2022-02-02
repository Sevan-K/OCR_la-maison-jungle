/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */

// on importe le fichier de style pour ce composant
import "../styles/Banner.css";

// on importe le logo
import logo from "../assets/logo.png";

// import du compsant recommendation
// import Recommendation from "./Reccommendation";

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */
// création du composant Banner
function Banner() {
  const bannerTitle = "La maison jungle";
  // const currentMonth = new Date().getMonth();
  // attention pour JS le code commence en janvier
  // const isSpring = currentMonth >= 2 && currentMonth <= 5;
  // console.log("Mois actuel :", currentMonth);
  // const recommendation = isSpring ? (
  //   <div>C'est le printemps, rempotez 🌱</div>
  // ) : (
  //   <div>Ce n'est pas le moment de rempoter.</div>
  // );

  return (
    <div className="lmj-banner">
        <img src={logo} alt={bannerTitle} className="lmj-banner__logo" />
        <h1 className="lmj-banner__title">{bannerTitle}</h1>
      {/* {recommendation} */}
      {/* <Recommendation /> */}
    </div>
  );
}

// autre manière d'ajouter du style mais pas recommandée
// function Banner() {
//   return (
//     // on ajoute un attribut de style
//     <div style={
//       // dans lequel on passe un objet JS avec le style
//       {
//       color: 'black',
//       // text-align devient textAlign en camelCase
//       textAlign:'right',
//       padding:32,
//       borderBottom:'solid 3px black'
//     }}>
//       <h1>La maison jungle</h1>
//     </div>
//   );
// }

/* ----------------------------------------- */
/*            Section des exports            */
/* ----------------------------------------- */
// on exporte Le composant
export default Banner;
