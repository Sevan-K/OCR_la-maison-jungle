// import du composant Banner
import Banner from "./Banner";

// import du composant Cart
import Cart from "./Cart";

// import du composant ShoppingList
import ShoppingList from "./ShoppingList";

// import du composant Footer
import Footer from "./Footer";

// import du formulaire QuestionForm
// import QuestionForm from "./QuestionForm";
// function de gestion du formulaire
// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(event.target[0].value);
// }

// on créer le composant principal App
function App() {
  return (
    <div className="lmj-app-wrapper">
      <Banner />
      {/* si on voulait utiliser des children */}
      {/* <Banner>
        <img src={logo} alt="La maison jungle" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner> */}
      <Cart />
      <ShoppingList />
      {/* formulaire non controlé */}
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="my_imput" defaultValue="Votre texte" />
        <button type="submit">Entrer</button>
      </form> */}
      {/* formulaire constrolé */}
      {/* <QuestionForm /> */}
      <Footer />
    </div>
  );
}

// on exporte App
export default App;
