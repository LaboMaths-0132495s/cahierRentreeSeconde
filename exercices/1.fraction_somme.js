class Somme1 {
	// somme ou difference avec le même dénominateur
	// a/d + b/d
	constructor() {
		this.operation = choice([-1, 1])
		while (this.a == undefined || this.a == this.b || PGCD(this.a, this.d)>1 || PGCD(this.b, this.d)>1 || this.numerateur%this.denominateur == 0) {
		    this.a = randInt(1,15)
		    this.b = randInt(1,15)
		    this.d = randInt(2,15)
		    this.numerateur = this.a + this.operation * this.b
		    this.denominateur = this.d
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mfrac>
                        <mn>${this.a}</mn>
                        <mn>${this.d}</mn>
                    </mfrac>
                    <mo>${this.operation>0?"+":"−"}</mo>
                    <mfrac>
                        <mn>${this.b}</mn>
                        <mn>${this.d}</mn>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mn>${haut}</mn>
                        <mn>${bas}</mn>
                    </mfrac>
                </mrow></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
        const base = `
            <mfrac>
                <mn>${this.a}</mn>
                <mn>${this.d}</mn>
            </mfrac>
            <mo>${this.operation>0?"+":"−"}</mo>
            <mfrac>
                <mn>${this.b}</mn>
                <mn>${this.d}</mn>
            </mfrac>
            <mo>=</mo>
            <mfrac>
                <mrow>
                    <mn>${this.a}</mn>
                    <mo>${this.operation>0?"+":"−"}</mo>
                    <mn>${this.b}</mn>
                </mrow>
                <mn>${this.d}</mn>
            </mfrac>
            <mo>=</mo>
            <mfrac>
                <mn>${this.a + this.operation * this.b}</mn>
                <mn>${this.d}</mn>
            </mfrac>
        `
        const pgcd = PGCD(Math.abs(this.numerateur), this.denominateur)
        const simplification = `
            <mo>=</mo>
            <mfrac>
                <mrow>
                    <mn>${this.numerateur/pgcd}</mn>
                    <mo>&times;</mo>
                    <mn>${pgcd}</mn>
                </mrow>
                <mrow>
                    <mn>${this.denominateur/pgcd}</mn>
                    <mo>&times;</mo>
                    <mn>${pgcd}</mn>
                </mrow>
            </mfrac>
            <mo>=</mo>
            <mfrac>
                <mn>${this.numerateur/pgcd}</mn>
                <mn>${this.denominateur/pgcd}</mn>
            </mfrac>
        `
        return `<math display="block"><mrow>${pgcd==1?base:base+simplification}</mrow></math>`
	}
}

class Somme2 {
	// somme ou difference avec un dénominateur multiple de l'autre
	// a/d +- b/(d*m) ou avec échange des termes
	constructor() {
		this.operation = choice([-1, 1])
		this.echangeTermes = choice([true, false])
		while (this.a == undefined || PGCD(this.a, this.d)>1 || PGCD(this.b, this.d*this.m)>1 || this.numerateur%this.denominateur == 0) {
		    this.a = randInt(1,15)
		    this.b = randInt(1,15)
		    this.d = randInt(2,10)
		    this.m = randInt(2,10)
		    this.numerateur = this.echangeTermes?this.a*this.m+this.operation*this.b:this.b+this.operation*this.a*this.m
		    this.denominateur = this.d*this.m
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mfrac>
                        <mn>${this.echangeTermes?this.a:this.b}</mn>
                        <mn>${this.echangeTermes?this.d:this.d*this.m}</mn>
                    </mfrac>
                    <mo>${this.operation>0?"+":"−"}</mo>
                    <mfrac>
                        <mn>${this.echangeTermes?this.b:this.a}</mn>
                        <mn>${this.echangeTermes?this.d*this.m:this.d}</mn>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mn>${haut}</mn>
                        <mn>${bas}</mn>
                    </mfrac>
                </mrow></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    var base
	    if ( this.echangeTermes ) {
            base = `
                <mfrac>
                    <mn>${this.a}</mn>
                    <mn>${this.d}</mn>
                </mfrac>
                <mo>${this.operation>0?"+":"−"}</mo>
                <mfrac>
                    <mn>${this.b}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                        <mn>${this.a}</mn>
                        <mo>&times;</mo>
                        <mn>${this.m}</mn>
                    </mrow>
                    <mrow>
                        <mn>${this.d}</mn>
                        <mo>&times;</mo>
                        <mn>${this.m}</mn>
                    </mrow>
                </mfrac>
                <mo>${this.operation>0?"+":"−"}</mo>
                <mfrac>
                    <mn>${this.b}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>=</mo>
                <mfrac>
                    <mn>${this.a*this.m}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>${this.operation>0?"+":"−"}</mo>
                <mfrac>
                    <mn>${this.b}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                        <mn>${this.a*this.m}</mn>
                        <mo>${this.operation>0?"+":"−"}</mo>
                        <mn>${this.b}</mn>
                    </mrow
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>=</mo>
                <mfrac>
                    <mn>${this.a*this.m + this.operation*this.b}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
            `
	    } else {
            base = `
                <mfrac>
                    <mn>${this.b}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>${this.operation>0?"+":"−"}</mo>
                <mfrac>
                    <mn>${this.a}</mn>
                    <mn>${this.d}</mn>
                </mfrac>
                <mo>=</mo>
                <mfrac>
                    <mn>${this.b}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>${this.operation>0?"+":"−"}</mo>
                <mfrac>
                    <mrow>
                        <mn>${this.a}</mn>
                        <mo>&times;</mo>
                        <mn>${this.m}</mn>
                    </mrow>
                    <mrow>
                        <mn>${this.d}</mn>
                        <mo>&times;</mo>
                        <mn>${this.m}</mn>
                    </mrow>
                </mfrac>
                <mo>=</mo>
                <mfrac>
                    <mn>${this.b}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>${this.operation>0?"+":"−"}</mo>
                <mfrac>
                    <mn>${this.a*this.m}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>=</mo>
                <mfrac>
                    <mrow>
                        <mn>${this.b}</mn>
                        <mo>${this.operation>0?"+":"−"}</mo>
                        <mn>${this.a*this.m}</mn>
                    </mrow
                    <mn>${this.d*this.m}</mn>
                </mfrac>
                <mo>=</mo>
                <mfrac>
                    <mn>${this.b + this.operation*this.a*this.m}</mn>
                    <mn>${this.d*this.m}</mn>
                </mfrac>
            `
	    }
        const pgcd = PGCD(Math.abs(this.numerateur), this.denominateur)
        const simplification = `
            <mo>=</mo>
            <mfrac>
                <mrow>
                    <mn>${this.numerateur/pgcd}</mn>
                    <mo>&times;</mo>
                    <mn>${pgcd}</mn>
                </mrow>
                <mrow>
                    <mn>${this.denominateur/pgcd}</mn>
                    <mo>&times;</mo>
                    <mn>${pgcd}</mn>
                </mrow>
            </mfrac>
            <mo>=</mo>
            <mfrac>
                <mn>${this.numerateur/pgcd}</mn>
                <mn>${this.denominateur/pgcd}</mn>
            </mfrac>
        `
        return `<math display="block"><mrow>${pgcd==1?base:base+simplification}</mrow></math>`
	}
}

class Somme3 {
	// somme ou difference avec un des dénominateurs non multiples l'un de l'autre
	// a/(d*m) +- b/(d*n) avec m et n premiers entre eux
	constructor() {
		this.operation = choice([-1, 1])
		while (this.a == undefined || this.m == this.n || PGCD(this.a, this.d*this.m)>1 || PGCD(this.b, this.d*this.n)>1 || this.numerateur%this.denominateur == 0) {
            this.a = randInt(1, 10)
            this.b = randInt(1, 15)
            this.d = randInt(1, 5)
            this.m = choice([2, 3, 5])
            this.n = choice([2, 3, 5])
            this.numerateur = this.a*this.n + this.operation*this.b*this.m
            this.denominateur = this.d*this.m*this.n
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mfrac>
                        <mn>${this.a}</mn>
                        <mn>${this.d*this.m}</mn>
                    </mfrac>
                    <mo>${this.operation>0?"+":"−"}</mo>
                    <mfrac>
                        <mn>${this.b}</mn>
                        <mn>${this.d*this.n}</mn>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mn>${haut}</mn>
                        <mn>${bas}</mn>
                    </mfrac>
                </mrow></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}

class Somme4 {
	// somme d'un entier avec une fraction
	// a +- b/d 
	constructor() {
		this.operation = choice([-1, 1])
		while (this.a == undefined || PGCD(this.b, this.d)>1 || this.numerateur%this.denominateur == 0) {
            this.a = randInt(1, 9)
            this.b = randInt(1, 15)
            this.d = randInt(2, 10)
            this.numerateur = this.a*this.d + this.operation*this.b
            this.denominateur = this.d
		}
	}
	
	htmlQuestion() {
	    // html correspondant à l'intitulé de la question
		const haut = `<input type="number" name="${this.inputHautID}">`
		const bas = `<input type="number" name="${this.inputBasID}">`
        return `<math display="block"><mrow>
                    <mn>${this.a}</mn>
                    <mo>${this.operation>0?"+":"−"}</mo>
                    <mfrac>
                        <mn>${this.b}</mn>
                        <mn>${this.d}</mn>
                    </mfrac>
                    <mo>=</mo>
                    <mfrac>
                        <mn>${haut}</mn>
                        <mn>${bas}</mn>
                    </mfrac>
                </mrow></math>`
	}
	
	htmlCorrection() {
	    // html correspondant à l'intitulé de la correction
	    return "Correction à venir"
	}
}
