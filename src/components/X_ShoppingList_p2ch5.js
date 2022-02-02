/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */

// on importe la variable contenant les informations sur les plantes
import { plantList } from "../datas/plantList";

// on importe le fichier de style
import "../styles/ShoppingList.css";

// on importe le copmposant pour l'ensoleillement
import PlantItem from "./PlantItem";

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */

// grace à la méthode map on retourne une li pour chaque élément du array
// on ajoute un affichage en fontion d'une condition pour les meilleures ventes
//  ajout du composant pour l'ensoleillement et l'arrosage (c'est le même)
// const plantListElements = plantList.map((plant) => (
//   <li key={plant.id} className="lmj-plant-item">
//     {plant.name}
//     {plant.isBestSale && <div className="lmj-sales">Soldes</div>}
//     <CareScale careType="water" scaleValue={plant.water} />
//     <CareScale careType="light" scaleValue={plant.light} />
//   </li>
// ));

// on utilise un composant plantItem pour générer la liste de plante
const plantListElements = plantList.map((plant) => (
  <PlantItem
    key={plant.id}
    name={plant.name}
    cover={plant.cover}
    light={plant.light}
    water={plant.water}
  />
));

// on créer une liste de catégorie vide
let categoryList = [];
// on la méthode forEach pour n'ajouter à la liste les catégorie qu'une seule fois
plantList.forEach((plant) => {
  const result = categoryList.find((category) => category === plant.category);
  if (!result) {
    categoryList.push(plant.category);
  }
});

// création du composant Banner
function ShoppingList() {
  // on retourne un ul avec la liste des catégories
  // ainsi qu'un autre ul pour la liste des plantes à vendre
  // les deux sont wrapper dans une div
  return (
    <div>
      <ul>
        {categoryList.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">{plantListElements}</ul>
    </div>
  );
}

/* ----------------------------------------- */
/*            Section des exports            */
/* ----------------------------------------- */
// on exporte Le composant
export default ShoppingList;
