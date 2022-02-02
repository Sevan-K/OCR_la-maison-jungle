// import du composant Banner
import Banner from "./Banner";

// import du composant Cart
import Cart from "./Cart";

// import du composant ShoppingList
import ShoppingList from "./ShoppingList";

// import du composant Footer
import Footer from "./Footer";

// import du style pour le layout
import "../styles/layout.css"

// on créer le composant principal App
function App() {
  return (
    <div className="lmj-app-wrapper">
      <Banner />
      <main className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </main>

      <Footer />
    </div>
  );
}

// on exporte App
export default App;
