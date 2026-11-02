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

function App() {
  const [etudiant , setEtudiants ] = useState([
    {
  "nom" : "Tessnim",
  "prenom" :"sassi",
  "email" :"tessnimsassi@gmail.com",
   "tel" :"+216 999999999",
   "fil" :"Genie logiciel et systémes dinformatique",
   "ann" :"2026/2027",
   "grp" :"GLSI B",
   "vill" :"nabeul",
   "Image": Image,},
   {
  "nom" : "sara",
  "prenom" :"trabelsi",
  "email" :"saratrabelsi@gmail.com",
   "tel" :"+216 999999999",
   "fil" :"Genie logiciel et systémes dinformatique",
   "ann" :"2026/2027",
   "grp" :"GLSI C",
   "vill" :"Mahdia",
   "Image": Image,},
   {"nom" : "salim",
  "prenom" :"boubaker",
  "email" :"salimboubaker@gmail.com",
   "tel" :"+216 999999999",
   "fil" :"Genie logiciel et systémes dinformatique",
   "ann" :"2026/2027",
   "grp" :"GLSI A",
   "vill" :"sousse",
   "Image": Image,
   }]);
   function ajouterEtudiant() {
  const nouvelEtudiant = {
    nom: "Ben Salem",
    prenom: "Yassine",
    email: "yassine.bensalem@gmail.com",
    tel: "+216 44 444 444",
    fil: "Génie Logiciel et Systèmes d'Information",
    ann: "2ème année",
    grp: "GLSI 1",
    vill: "Sfax",
    
  };
  setEtudiants([...etudiant, nouvelEtudiant]);
}
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="actions">
        <button id='btaj' onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
      </div>
    <div className="page">
      
      {etudiant.map((etudiant) => (
     <Bienvenu 
     key={etudiant.email}
      prenom={etudiant.prenom}
     nom={etudiant.nom}
     email={etudiant.email}
     tel={etudiant.tel}
     fil={etudiant.fil}
     ann={etudiant.ann}
     grp={etudiant.grp}
     vill={etudiant.vill}
     Image={etudiant.Image}
     >
     </Bienvenu>))}
</div>
<Footer></Footer>
</div>

    )}
export default App



