/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */

// on importe le fichier de style pour ce composant
// import "../styles/Banner.css";

// on importe la variable contenant les informations sur les plantes
import { plantList } from "../datas/plantList";

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */

// grace à la méthode map on retourne une li pour chaque élément du array
const plantListElements = plantList.map((plant) => (
  <li key={plant.id}>{plant.name}</li>
));
console.log(
  "Tableau avec la liste des plante sous la forme d'éléments",
  plantListElements
);

// autre manière de créer une liste sans doublon
// const categories = plantList.reduce(
//     (acc, plant) =>
//         acc.includes(plant.category) ? acc : acc.concat(plant.category),
//     []
// )

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
        {categoryList.map((category, index) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul>{plantListElements}</ul>
    </div>
  );
}

/* ----------------------------------------- */
/*            Section des exports            */
/* ----------------------------------------- */
// on exporte Le composant
export default ShoppingList;
