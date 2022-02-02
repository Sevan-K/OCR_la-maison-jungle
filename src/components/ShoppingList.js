/* ----------------------------------------- */
/*            Section des imports            */
/* ----------------------------------------- */

// on importe la variable contenant les informations sur les plantes
import { plantList } from "../datas/plantList";

// on importe le fichier de style
import "../styles/ShoppingList.css";

// on importe le copmposant pour l'ensoleillement
import PlantItem from "./PlantItem";

// on importe le composant pour les catégories
import Categories from "./Categories";

// on itmporte useState
import { useState } from "react";

/* ------------------------------------------- */
/*            Création du composant            */
/* ------------------------------------------- */

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
function ShoppingList({ cart, updateCart }) {
  // on déclare le state catégorie
  const [selectValue, setSelectValue] = useState("");

  // fonction pour ajouter au panier
  function addToCart(name, price) {
    const plantToAdd = cart.find((item) => item.name === name);
    console.log(plantToAdd);
    if (plantToAdd) {
      const cartFilteredPlantToAdd = cart.filter((item) => item.name !== name);
      updateCart([
        ...cartFilteredPlantToAdd,
        { name, price, quantity: plantToAdd.quantity + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, quantity: 1 }]);
    }
  }

  // on utilise un composant plantItem pour générer la liste de plante
  const plantListElements = plantList.map(
    (plant) =>
      (plant.category === selectValue || !selectValue) && (
        <div key={plant.id}>
          <PlantItem
            // key={plant.id}
            name={plant.name}
            cover={plant.cover}
            light={plant.light}
            water={plant.water}
            price={plant.price}
          />
          <button onClick={() => addToCart(plant.name, plant.price)}>
            Ajouter
          </button>
        </div>
      )
  );

  // on retourne un ul avec la liste des catégories
  // ainsi qu'un autre ul pour la liste des plantes à vendre
  // les deux sont wrapper dans une div
  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categoryList}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />
      <ul className="lmj-plant-list">{plantListElements}</ul>
    </div>
  );
}

/* ----------------------------------------- */
/*            Section des exports            */
/* ----------------------------------------- */
// on exporte Le composant
export default ShoppingList;
