class Quotient1 extends QuestionFraction {
	// quotient d'une fraction par un entier
	// (a/b)/c
	constructor() {
        super()
		while (!this.a || this.a%this.b == 0 || this.numerateur%this.denominateur == 0) {
            this.a = randInt(2, 9)
            this.b = randInt(2, 9)
            this.c = randInt(2, 9)
            this.numerateur = this.a
            this.denominateur = this.c*this.b
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mfrac>
                        <mrow>
                            <mfrac>
                                <mn>${this.a}</mn>
                                <mn>${this.b}</mn>
                            </mfrac>
                        </mrow>
                        <mn>${this.c}</mn>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mrow><mn>${haut}</mn></mrow>
                        <mrow><mn>${bas}</mn></mrow>
                    </mfrac>
                </mrow></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}

class Quotient2 extends QuestionFraction {
	// quotient d'un entier par une fraction
	// a/(b/c)
	constructor() {
        super()
		while (!this.a || this.b%this.c == 0 || this.numerateur%this.denominateur == 0) {
            this.a = randInt(2, 9)
            this.b = randInt(2, 9)
            this.c = randInt(2, 9)
            this.numerateur = this.a*this.c
            this.denominateur = this.b
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mfrac>
                        <mn>${this.a}</mn>
                        <mrow>
                            <mfrac>
                                <mn>${this.b}</mn>
                                <mn>${this.c}</mn>
                            </mfrac>
                        </mrow>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mrow><mn>${haut}</mn></mrow>
                        <mrow><mn>${bas}</mn></mrow>
                    </mfrac>
                </mrow></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}

class Quotient3 extends QuestionFraction {
	// quotient de deux fractions
	// (a/b)/(c/d)
	constructor() {
        super()
		while (!this.a || this.a%this.b == 0 || this.c%this.d == 0 || this.numerateur%this.denominateur == 0) {
            this.a = randInt(2, 9)
            this.b = randInt(2, 9)
            this.c = randInt(2, 9)
            this.d = randInt(2, 9)
            this.numerateur = this.a*this.d
            this.denominateur = this.b*this.c
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mfrac>
                        <mrow>
                            <mfrac>
                                <mn>${this.a}</mn>
                                <mn>${this.b}</mn>
                            </mfrac>
                        </mrow>
                        <mrow>
                            <mfrac>
                                <mn>${this.c}</mn>
                                <mn>${this.d}</mn>
                            </mfrac>
                        </mrow>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mrow><mn>${haut}</mn></mrow>
                        <mrow><mn>${bas}</mn></mrow>
                    </mfrac>
                </mrow></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}



if (typeof module != 'undefined') { module.exports = {Somme1} }
