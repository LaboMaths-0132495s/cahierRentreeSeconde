class PrendrePourcentage extends QuestionEntier {
	// prendre un pourcentage d'une quantité
	constructor() {
	    super()
		while (this.p == undefined || this.Q == 100 || !Number.isInteger(this.reponse)) {
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
	    return `<math><mrow>
	    	<mfrac>
	            <mrow><mn>${this.p}</mn></mrow>
	            <mrow><mn>100</mn></mrow>
	        </mfrac>
	        <mo>&times;</mo>
	        <mn>${this.Q}</mn>
	        <mo>=</mo>
	        <mn>${this.p*this.Q/100}</mn>
    	</mrow></math>`
	}
}

class CalculerPourcentage extends QuestionEntier {
	// calculer un pourcentage
	constructor() {
	    super()
		while (this.n == undefined || this.N == 100 || !Number.isInteger(this.reponse)) {
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
	    return [
            `Dans cette entreprise, il y a <math><mrow><mn>${this.n}</mn><mo>+</mo><mn>${this.N-this.n}</mn><mo>=</mo><mn>${this.N}</mn></mrow></math> employés.<br/>
	            <math><mrow>
			    	<mfrac>
			            <mrow><mn>${this.n}</mn></mrow>
			            <mrow><mn>${this.N}</mn></mrow>
			        </mfrac>
			        <mo>=</mo>
			        <mn>${this.n/this.N}</mn>
		    	</mrow></math><br/>
		    Dans cette entreprise, il y a <math><mn>${this.n/this.N*100}</mn><mo>%</mo></math> employées.`,
            `<math><mrow>
			    	<mfrac>
			            <mrow><mn>${this.n}</mn></mrow>
			            <mrow><mn>${this.N}</mn></mrow>
			        </mfrac>
			        <mo>=</mo>
			        <mn>${this.n/this.N}</mn>
		    	</mrow></math><br/>
		    Dans ce club, il y a <math><mn>${this.n/this.N*100}</mn><mo>%</mo></math> d'adhérents anglais.`
        ][this.variante]
	}
}

class EffectifTotal  extends QuestionEntier {
	// calculer l'effectif total
	constructor() {
	    super()
		while (this.n == undefined || this.N == 100 || !Number.isInteger(this.reponse)) {
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
	    return [
        	`<table style="border-collapse:collapse; text-align:center">
        		<tr><td style="border: 1px solid black">${this.p}</td><td style="border: 1px solid black">&nbsp;${this.n}&nbsp;</td></tr>
        		<tr><td style="border: 1px solid black">&nbsp;100&nbsp;</td><td style="border: 1px solid black">?</td></tr>
        	</table>
            	<math><mrow>
			    	<mfrac>
			            <mrow><mn>${this.n}</mn><mo>&times;</mo><mn>100</mn></mrow>
			            <mrow><mn>${this.p}</mn></mrow>
			        </mfrac>
			        <mo>=</mo>
			        <mn>${this.reponse}</mn>
		    	</mrow></math><br/>
		    Dans cette entreprise, il y a ${this.reponse} employés.`,
            `<table style="border-collapse:collapse; text-align:center">
        		<tr><td style="border: 1px solid black">${this.p}</td><td style="border: 1px solid black">&nbsp;${this.n}&nbsp;</td></tr>
        		<tr><td style="border: 1px solid black">&nbsp;100&nbsp;</td><td style="border: 1px solid black">?</td></tr>
        	</table>
            	<math><mrow>
			    	<mfrac>
			            <mrow><mn>${this.n}</mn><mo>&times;</mo><mn>100</mn></mrow>
			            <mrow><mn>${this.p}</mn></mrow>
			        </mfrac>
			        <mo>=</mo>
			        <mn>${this.reponse}</mn>
		    	</mrow></math><br/>
		    Dans ce club, il y a ${this.reponse} adhérents.`
        ][this.variante]
	}
}

