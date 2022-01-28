// import du composant Banner
import Banner from "./Banner";
// import du composant Cart
import Cart from "./Cart";
// import du composant ShoppingList
import ShoppingList from "./ShoppingList";

// on créer le composant principal App
function App() {
  return (
    <div className="lmj-app-wrapper">
      <Banner />
      <Cart />
      <ShoppingList/>
    </div>
  );
}

// on exporte App
export default App;