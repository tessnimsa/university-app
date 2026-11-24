import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Bienvenu from './components/Bienvenu'
import Image from './assets/fill.jpg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Studentform from './components/Studentform'

function App() {
  const [etudiant , setEtudiants ] = useState([
    {
  "nom" : "Tessnim",
  id:"s1",
  "prenom" :"sassi",
  "email" :"tessnimsassi@gmail.com",
   "telephone" :"+216 999999999",
   "filiere" :"Genie logiciel et systémes dinformatique",
   "anneeEtude" :"2026/2027",
   "group" :"GLSI B",
   "ville" :"nabeul",
   "Image": Image,},
   {
  "nom" : "sara",
  id:"s2",
  "prenom" :"trabelsi",
  "email" :"saratrabelsi@gmail.com",
   "telephone" :"+216 999999999",
   "filiere" :"Genie logiciel et systémes dinformatique",
   "anneeEtude" :"2026/2027",
   "group" :"GLSI C",
   "ville" :"Mahdia",
   "Image": Image,},
   {"nom" : "salim",
    id:"s3",
  "prenom" :"boubaker",
  "email" :"salimboubaker@gmail.com",
   "telephone" :"+216 999999999",
   "filiere" :"Genie logiciel et systémes dinformatique",
   "anneeEtude" :"2026/2027",
   "group" :"GLSI A",
   "ville" :"sousse",
   "Image": Image,
   }]);
   const [etudiantAModifier, setEtudiantAModifier] = useState(null);
 function ajouterEtudiant(nouvelEtudiant) {
  const etudiantAvecId = { ...nouvelEtudiant, id: Date.now() };
  setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
}

function supprimerEtudiant(id) {
  setEtudiants(etudiant.filter((etudiant) => etudiant.id !== id));
}
function enregistrerModification(etudiantModifie) {
  setEtudiants((anciensEtudiants) =>
    anciensEtudiants.map((etudiant) =>
      etudiant.id === etudiantAModifier.id
        ? { ...etudiantModifie, id: etudiant.id } // keep the id
        : etudiant
    )
  );
  setEtudiantAModifier(null);
}
  function modifierEtudiant(etudiant) {  
    setEtudiantAModifier(etudiant);
  }




  return (
    <div>
     <Header /> 
      <Navbar></Navbar>
      <Studentform
  key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
  onAjouterEtudiant={ajouterEtudiant}
  etudiantAModifier={etudiantAModifier}
  onModifierEtudiant={enregistrerModification}
/>
      <div className="actions">
      </div>
    <div className="page">
      
    {etudiant.map((etudiant) => (
     <Bienvenu 
     key={etudiant.email}
      prenom={etudiant.prenom}
      id={etudiant.id}
     nom={etudiant.nom}
     email={etudiant.email}
     tel={etudiant.telephone}
     fil={etudiant.filiere}
     ann={etudiant.anneeEtude}
     grp={etudiant.group}
     vill={etudiant.ville}
     Image={etudiant.Image}
      onSupprimer={() => supprimerEtudiant(etudiant.id)}
      onModifier={()=> modifierPrenom(etudiant.email)}
     >
     </Bienvenu>))}
     
</div>
<Footer></Footer>
</div>

    )}
export default App



