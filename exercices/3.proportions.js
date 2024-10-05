class PrendrePourcentage extends QuestionEntier {
	// prendre un pourcentage d'une quantité
	constructor() {
	    super()
		while (!this.p || this.Q == 100 || !Number.isInteger(this.reponse)) {
		    this.p = randInt(1,99)
		    this.Q = randInt(1,199)
		    this.reponse = this.p * this.Q / 100
		}
		this.unite = choice(["g", "L", "€"])
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
        return `Calculer : <math><mrow><mn>${this.p}</mn><mi>%</mi></mrow></math> de <math><mrow><mn>${this.Q}</mn><mi>${this.unite}</mi></mrow></math><br/><input type="number" name="${this.input}"><math><mi>${this.unite}</mi></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}

class CalculerPourcentage extends QuestionEntier {
	// calculer un pourcentage
	constructor() {
	    super()
		while (!this.n || this.N == 100 || !Number.isInteger(this.reponse)) {
		    this.n = randInt(100,5000)
		    this.N = randInt(this.n,9000)
		    this.reponse = (this.n*100)/this.N
		}
		this.variante = randInt(0,1)
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
        return [
            `Dans une entreprise, il y a ${this.n} femmes et ${this.N-this.n} hommes.<br>
            Quel est le pourcentage de femmes employées dans cette entreprise ?<br>
            <input type="number" name="${this.input}">`,
            `Dans un club comptant ${this.N} adhérents, il y a ${this.n} anglais.<br>
            Quel est le pourcentage d'anglais dans ce club ?<br>
            <input type="number" name="${this.input}">`
        ][this.variante]
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}

class EffectifTotal  extends QuestionEntier {
	// calculer l'effectif total
	constructor() {
	    super()
		while (!this.n || this.N == 100 || !Number.isInteger(this.reponse)) {
		    this.n = randInt(100,5000)
		    this.p = randInt(1,99)
		    this.reponse = (this.n*100)/this.p
		}
		this.variante = randInt(0,1)
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
        return [
            `Dans une entreprise, ${this.p}% des employés sont des femmes, soit ${this.n} employées.<br>
            Quel est le nombre total d'employés dans cette entreprise ?<br>
            <input type="number" name="${this.input}">`,
            `Dans une club, il y a ${this.p}% d'anglais, ce qui représente ${this.n} adhérents.<br>
            Quel est le nombre d'adhérents dans ce club ?<br>
            <input type="number" name="${this.input}">`
        ][this.variante]
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}
