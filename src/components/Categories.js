// import du style css
import "../styles/Categories.css"

// création du composant
function Categories({ categories, selectValue, setSelectValue }) {
  return (
    <div className="lmj-categories">
      <select
        className="lmj-categories-select"
        value={selectValue}
        onChange={(event) => {
          setSelectValue(event.target.value);
        }}
      >
        <option value={""}>Choisiez une catégorie 🌱</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setSelectValue("")}>Réinitialisez</button>
    </div>
  );
}

// on exporte le composant
export default Categories;
