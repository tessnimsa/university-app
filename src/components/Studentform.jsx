import './Studentform.css'
function Studentform(){
    return (
        <div>
            <form>
                <h3 id='h3'>Ajouter un etudiant</h3>
                <label htmlFor="nom">nom:</label><br></br>
                <input type="text" id="nom" name='nom' /><br></br>
                 <label htmlFor="prenom">prenom:</label><br></br>
                <input type="text" id="prenom" name='prenom' /><br></br>
                 <label htmlFor="Email">Email:</label><br></br>
                <input type="text" id="Email" name='Email' /><br></br>
                 <label htmlFor="telephone">Telephone:</label><br></br>
                <input type="text" id="telephone" name='telephone' /><br></br>
                <label htmlFor="Filiere">Filiere</label><br></br>
                <select name="Filiere" id="Filiere" required>
                    <option value="">Choisir une filiere</option>
                    <option value="GLSI">GLSI</option>
                    <option value="LCS">LCS</option>
                    <option value="LBC">LBC</option>
                </select><br></br>
                <label htmlFor="Annee d'etude">Annee d'etude:</label><br></br>
                <input type="text" id="Annee d'etude" name='Annee detude' /><br></br>
                <label htmlFor="Group">Group:</label><br></br>
                <input type="text" id='Group' name='Group' /><br></br>
                <label htmlFor="ville">ville:</label><br></br>
                <input type="text" id='ville' name='ville' /><br></br>
                <label htmlFor="image">image:</label><br></br>
                <input type="text" id='image' name='image' /><br></br>
                <button id='btnajouter' >Ajouter</button><br></br>
            </form>
        </div>
    )
}
export default Studentform