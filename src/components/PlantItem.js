// on importe le copmposant pour l'ensoleillement
import CareScale from "./CareScale";

// on importe le style lié à ce composant
import "../styles/PlantItem.css";

// création du composant PlantItem
function PlantItem({ name, cover, light, water }) {
  return (
    <li className="lmj-plant-item">
      <p>
        <img
          src={cover}
          className="lmj-plant-item-cover"
          alt={"Photo d'une plante : " + name}
        />
      </p>
      {name}
      {/* {plant.isBestSale && <div className="lmj-sales">Soldes</div>} */}
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </li>
  );
}

// on exporte le composant
export default PlantItem;
