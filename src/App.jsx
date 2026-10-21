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
const etudiant =[{
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
   }
   
  ] 
function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
    <div class="page">
      
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



