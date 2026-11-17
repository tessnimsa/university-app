import './Bienvenu.css'
import { useState } from "react";
function Bienvenu(props){
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);
  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);    //! =not visibilite
}
return (<div class="page">
<div className="cadre">
    <img src={props.Image} alt="image de l etudiant" />
    <h1 id="ff">Fiche étudiant </h1>
      <p><strong>Nom & Prenom :</strong>{props.nom} {props.prenom}</p>
      <p><strong>id:</strong>{props.id} </p>
      {coordonneesVisibles && (                   //si coordonnees visibles est true donc masqué
  <>
      <p><strong>Email:</strong>{props.email} </p>
      <p><strong>Telephone:</strong>{props.tel}</p> </>
)}
      <p><strong>Filiere:</strong>{props.fil}</p>
      <p><strong>Année d'etudes:</strong>{props.ann}</p>
      <p><strong>Groupe:</strong>{props.grp}</p>
      <p><strong>Ville:</strong>{props.vill}</p>
      <button style={{ ing:"6px 12px"}} class="bt">Contacter</button>
      <button class='bt' onClick={basculerCoordonnees}>
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
      </button>
       <button class="bt" onClick={props.onSupprimer}>Supprimer</button>
       <button class="bt" onClick={props.onModifier}>Modifier</button>
</div>
    </div>
  )
}

export default Bienvenu