/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */

// on importe la variable contenant les informations sur les plantes
import { plantList } from "../datas/plantList";

// on importe le fichier de style
import "../styles/ShoppingList.css";

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */

// grace à la méthode map on retourne une li pour chaque élément du array
// on ajoute un affichage en fontion d'une condition pour les meilleures ventes
const plantListElements = plantList.map((plant) => (
  <li key={plant.id} className="lmj-plant-item">
    {plant.name}
    {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
  </li>
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
