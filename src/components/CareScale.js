// on importe le soleil
import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

// création du composant
function CareScale({ scaleValue, careType }) {
  //   const { scaleValue, careType } = props;
  // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
  // const scaleValue = props.scaleValue
  // const careType = props.careType
  // on a même écris cela directement dans les argument en remplaçant props par : { scaleValue, careType }

  //   la maninière dont j'aurais fait
  //   let suns = [];
  //   for (let i = 0; i < scaleValue; i++) {
  //     suns.push(<span key={rangeElement.toString()}>☀️</span>);
  //   }
  //   return <div>{suns}</div>;

  //   constant pour choisir le type d'échelle
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="iconne d'un soleil" />
    ) : (
      <img src={water} alt="iconne d'une goutte" />
    );

  //   méthode du cours basée sur une échelle manuelle et la méthode map
  const range = [1, 2, 3];
  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}
// on exporte le composant
export default CareScale;
