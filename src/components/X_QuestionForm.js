// import de useState
import { useState } from "react";

// on créer le composant QuestionForm
function QuestionForm() {
  // on déclare l'état initial d'inputValue, la fonction pour la modifier et une valeur par défaut
  const [inputValue, setInputValue] = useState("Posez votre question ici");
  // fonction de validation pour ne pas afficher les f
  function checkValue(value) {
    if (!value.includes("f")) {
      setInputValue(value);
    }
  }
  return (
    <div>
      <textarea
        value={inputValue}
        onChange={(event) => checkValue(event.target.value)}
      />
      <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
    </div>
  );
}

// export du composant
export default QuestionForm;
