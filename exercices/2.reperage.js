class LireCoordonnees extends QuestionDeuxEntier {
	// lire les coordonnées d'un point placé dans le repère
	constructor() {
	    super()
		while (this.x == undefined || this.x == this.y) {
		    this.x = randInt(-5,5)
		    this.y = randInt(-5,5)
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const x = `<input type="number" name="${this.inputX}">`
		const y = `<input type="number" name="${this.inputY}">`
        return `Les coordonnées du point P dans ce repère sont :
            <math><mrow>
                <mo>(</mo>
                <mn>${x}</mn>
                <mo>;</mo>
                <mn>${y}</mn>
                <mo>)</mo>
            </mrow></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}

class PlacerPoint {
	// placer dans le repère le point dont les coordonnées sont données
	constructor() {
		while (this.x == undefined || this.x == this.y) {
		    this.x = randInt(-5,5)
		    this.y = randInt(-5,5)
		}
	}
	
	formater_reponse_client(repere) {
	    // formate la réponse côté client (entrainement seulement)
	    return {
	        x: repere.pointChoisi.X,
	        y: repere.pointChoisi.Y,
	    }
	}
	
	verifier(reponse) {
        // vérifier si la réponse donnée (formaté dans un objet) est bonne
	    if (reponse.x == this.x && reponse.y == this.y) {
            return {verdict: true, message: "Vrai"}
	    }
		return {verdict: false, message: "Faux"}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
        return `Placer le point P de coordonnées P(${this.x};${this.y}).`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}
