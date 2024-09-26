class Question {
	constructor(idForm) {
		this.a = randInt(1,6)
		this.b = randInt(1,6)
		this.inputID = 'a' + Math.random()
	}
	
	formater_reponse_client() {
	    // formate la réponse côté client (entrainement seulement)
	    return { rep:document.getElementsByName(this.inputID)[0].value }
	}
	
	verifier(reponse) {
        // vérifier si la réponse donnée (formaté dans un objet ayant pour attribut `rep`) est bonne
	    if (reponse.rep == this.a + this.b) {
	        return {verdict: true, message: "Vrai"}
	    }
		return {verdict: false, message: "Faux"}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
	    return `<span>${this.a} + ${this.b} = </span><input type="number" name="${this.inputID}"/>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return `<p>${this.a} + ${this.b} = ${this.a+this.b}</p>`
	}
}

module.exports = {Question}
