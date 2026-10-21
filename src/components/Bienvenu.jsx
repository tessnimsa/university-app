function Bienvenu(props){
return (<div class="page">
<div class="cadre">
    <img src={props.Image} alt="image de l etudiant" />
    <h1 id="ff">Fiche étudiant </h1>
      <p><strong>Nom & Prenom :</strong>{props.nom} {props.prenom}</p>
      <p><strong>Email:</strong>{props.email} </p>
      <p><strong>Telephone:</strong>{props.tel}</p>
      <p><strong>Filiere:</strong>{props.fil}</p>
      <p><strong>Année d'etudes:</strong>{props.ann}</p>
      <p><strong>Groupe:</strong>{props.grp}</p>
      <p><strong>Ville:</strong>{props.vill}</p>
      <button style={{ ing:"6px 12px"}} id="bt">Contacter</button>
</div>
    </div>
  )
}

export default Bienvenu