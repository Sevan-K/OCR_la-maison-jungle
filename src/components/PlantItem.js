/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */
// on importe le copmposant pour l'ensoleillement
import CareScale from "./CareScale";

// on importe le style lié à ce composant
import "../styles/PlantItem.css";

/* -------------------------------------------- */
/*            Gestion des évenements            */
/* -------------------------------------------- */
// on déclare la fonction liée à l'évenement en camelCase
function handleClick(event) {
  // alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
  // on peut utiliser les fonctions suivantes
  // event.stopPropagation();
  // event.preventDefault();
  console.log("Ceci est mon évènement :", event);
}

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */

// création du composant PlantItem
function PlantItem({ name, cover, light, water, price }) {
  // on déclare l'évenement à attendre et lui passe la fonction à appeler
  // si on  veut passer un argument à la fonction du cloick on écrit :
  // {()=>handleClick(name)}
  return (
    <li className="lmj-plant-item">
      <span className="lmj-plant-price">{price}€</span>
      <span>
        <img
          src={cover}
          className="lmj-plant-item-cover"
          alt={"Photo d'une plante : " + name}
        />
      </span>
      {name}
      {/* {plant.isBestSale && <div className="lmj-sales">Soldes</div>} */}
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
      <div className="test">
        <div className="test__loader"></div>
      </div>
    </li>
  );
}

/* ----------------------------------------- */
/*            Section des exports            */
/* ----------------------------------------- */
// on exporte le composant
export default PlantItem;
