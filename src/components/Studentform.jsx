import './Studentform.css'
import { useState } from "react";

function Studentform({ onAjouterEtudiant ,etudiantAModifier, onModifierEtudiant }){
 const [nom, setNom] = useState(etudiantAModifier?.nom || "");
const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
const [email, setEmail] = useState(etudiantAModifier?.email || "");
const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
const [anneeEtude, setAnneeEtude] = useState(etudiantAModifier?.anneeEtude || "");
const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
const [ville, setVille] = useState(etudiantAModifier?.ville || "");
const [image, setImage] = useState(etudiantAModifier?.image || "");
 const [erreurs, setErreurs] = useState({}); 
 function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!nom.trim()) nouvellesErreurs.nom = "Nom est obligatoire";
    if (!prenom.trim()) nouvellesErreurs.prenom = "Prénom est obligatoire";

    if (!email.trim()) {
      nouvellesErreurs.email = "Email est obligatoire";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nouvellesErreurs.email = "Email invalide";
    }

    if (!telephone.trim()) nouvellesErreurs.telephone = "Téléphone est obligatoire";

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }
function handleSubmit(e) {
  e.preventDefault();

  const nouvelEtudiant = {
    nom, prenom, email, telephone,
    filiere, anneeEtude, groupe, ville, image,
  };

  if (etudiantAModifier) {
    onModifierEtudiant({ ...etudiantAModifier, ...nouvelEtudiant });
  } else {
    onAjouterEtudiant(nouvelEtudiant);
  }
}
    return (
        <div>
             <form onSubmit={handleSubmit} className="student-form">
                <h2>{etudiantAModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}</h2>
                <label htmlFor="nom">nom:</label><br></br>
                <input type="text" id="nom" name='nom' value={nom} onChange={(e) => setNom(e.target.value)}/>
                {erreurs.nom && <p className="error-msg">{erreurs.nom}</p>}<br></br>
                 <label htmlFor="prenom">prenom:</label><br></br>
                <input type="text" id="prenom" name='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
                {erreurs.prenom && <p className="error-msg">{erreurs.prenom}</p>}<br></br>
                 <label htmlFor="email">Email:</label><br></br>
                <input type="text" id="Email" name='Email'value={email} onChange={(e) => setEmail(e.target.value)} />
                {erreurs.email && <p className="error-msg">{erreurs.email}</p>}<br></br>
                 <label htmlFor="telephone">Telephone:</label><br></br>
                <input type="text" id="telephone" name='telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
                {erreurs.telephone && <p className="error-msg">{erreurs.telephone}</p>}<br></br>
                <label htmlFor="Filiere">Filiere</label><br></br>
                <select name="Filiere" id="Filiere" required value={filiere} onChange={(e) => setFiliere(e.target.value)}>
                    <option value="">Choisir une filiere</option>
                    <option value="GLSI">GLSI</option>
                    <option value="LCS">LCS</option>
                    <option value="LBC">LBC</option>
                </select><br></br>
                <label htmlFor="Annee d'etude">Annee d'etude:</label><br></br>
                <input type="text" id="Annee d'etude" name='Annee detude'  value={anneeEtude} onChange={(e) => setAnneeEtude(e.target.value)} /><br></br>
                <label htmlFor="Group">Group:</label><br></br>
                <input type="text" id='Group' name='group' value={groupe} onChange={(e) => setGroupe(e.target.value)} /><br></br>
                <label htmlFor="ville">ville:</label><br></br>
                <input type="text" id='ville' name='ville' value={ville} onChange={(e) => setVille(e.target.value)}/><br></br>
                <label htmlFor="image">image:</label><br></br>
                <input type="file" id="image"  accept="image/*"onChange={(e) => {const fichier = e.target.files[0];
                 if (fichier) {setImage(URL.createObjectURL(fichier)); }}}/><br></br>
                 <button type="submit" className="btn-submit">{etudiantAModifier ? "Modifier" : "Ajouter"}</button>
            </form>
        </div>
    )
}
export default Studentform