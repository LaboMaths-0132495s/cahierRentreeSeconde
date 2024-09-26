class Produit1 extends QuestionFraction {
	// produit de 2 fractions avec éventuelle simplification
	// a/b x c/d 
	constructor() {
        super()
		while (!this.a || this.b == 1 || this.d == 1 || this.a == this.d || this.c == this.b || this.a == this.c || this.numerateur%this.denominateur == 0) {
            this.a = 1
            this.b = 1
            for (let P of [[2, 3], [3, 2], [5, 1], [7, 1]]) {
                if (choice([true, false])) { this.a = this.a * Math.pow(P[0], randInt(0,P[1])) }
                else { this.b = this.b * Math.pow(P[0], randInt(0,P[1])) }
            }
            this.c = 1
            this.d = 1
            for (let P of [[2, 3], [3, 2], [5, 1], [7, 1]]) {
                if (choice([true, false])) { this.c = this.c * Math.pow(P[0], randInt(0,P[1])) }
                else { this.d = this.d * Math.pow(P[0], randInt(0,P[1])) }
            }
            this.numerateur = this.a*this.c
            this.denominateur = this.b*this.d
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mfrac>
                        <mn>${this.a}</mn>
                        <mn>${this.b}</mn>
                    </mfrac>
                    <mo>&times;</mo>
                    <mfrac>
                        <mn>${this.c}</mn>
                        <mn>${this.d}</mn>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mrow><mn>${haut}</mn></mrow>
                        <mrow><mn>${bas}</mn></mrow>
                    </mfrac>
                </mrow></frac>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}

class Produit2 extends QuestionFraction {
	// produit de 2 fractions avec simplification. Le numérateur du résultat est égal à 1
	// a/b x c/d 
	constructor() {
        super()
		while (!this.a || this.b == 1 || this.d == 1 || this.a == this.d || this.c == this.b || this.a == this.c || this.numerateur%this.denominateur == 0) {
            this.a = 1
            this.b = 1
            this.c = 1
            this.d = 1
            for (let P of [[2, 3], [3, 2], [5, 1], [7, 1]]) {
                if (choice([true, false])) {
                    const expo = randInt(0,P[1])
                    this.a = this.a * Math.pow(P[0], expo)
                    this.d = this.d * Math.pow(P[0], Math.max(expo, randInt(0,P[1])))
                } else {
                    const expo = randInt(0,P[1])
                    this.c = this.c * Math.pow(P[0], expo)
                    this.b = this.b * Math.pow(P[0], Math.max(expo, randInt(0,P[1])))
                }
            }
            this.numerateur = this.a*this.c
            this.denominateur = this.b*this.d
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mfrac>
                        <mn>${this.a}</mn>
                        <mn>${this.b}</mn>
                    </mfrac>
                    <mo>&times;</mo>
                    <mfrac>
                        <mn>${this.c}</mn>
                        <mn>${this.d}</mn>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mrow><mn>${haut}</mn></mrow>
                        <mrow><mn>${bas}</mn></mrow>
                    </mfrac>
                </mrow></frac>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}



if (typeof module != 'undefined') { module.exports = {Somme1} }
