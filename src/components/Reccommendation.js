// création du composant de recommandation
function Recommendation() {
  const currentMonth = new Date().getMonth();
  // attention pour JS le code commence en janvier
  const isSpring = currentMonth >= 2 && currentMonth <= 5;
//   on utilise un if pour la condition
  if (!isSpring) {
    return <div>Ce n'est pas le moment de rempoter.</div>;
  }
  return <div>C'est le printemps, rempotez 🌱</div>;
}
// on l'exporte
export default Recommendation;
