import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Bienvenu from './components/Bienvenu'
import Image from './assets/fill.jpg'
import './App.css'
function App() {
  const etudiant = {
    "nom" : "Tessnim",
    "prenom" :"sassi",
    "email" :"tessnimsassi@gmail.com",
     "tel" :"+216 999999999",
     "fil" :"Genie logiciel et systémes dinformatique",
     "ann" :"2026/2027",
     "grp" :"GLSI B",
     "vill" :"nabeul",
     "image": Image,}
  return (
    <div class="page">
      <div class="cadre">
    <img src={etudiant.image} alt="image de l etudiant" />
    <h1 id="ff">Fiche étudiant</h1>
      <p><strong>Nom & Prenom :</strong>{etudiant.nom} {etudiant.prenom}</p>
      <p><strong>Email:</strong>{etudiant.email} </p>
      <p><strong>Telephone:</strong>{etudiant.tel}</p>
      <p><strong>Filiere:</strong>{etudiant.fil}</p>
      <p><strong>Année d'etudes:</strong>{etudiant.ann}</p>
      <p><strong>Groupe:</strong>{etudiant.grp}</p>
      <p><strong>Ville:</strong>{etudiant.vill}</p>
      <button style={{ ing:"6px 12px"}} id="bt">Contacter</button>
</div>

    </div>)}
export default App



