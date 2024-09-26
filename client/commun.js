function randInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function choice(L) {
    return L[randInt(0, L.length-1)]
}

function PGCD(a,b) {
	while(a!=b) {
		if (a>b) {a=a-b}
		else {b=b-a}
	};
	return a
};

class QuestionFraction {
    // classe générique permettant le contrôle du résultat
	constructor() {
		this.inputHautID = 'a' + Math.random()
		this.inputBasID = 'a' + Math.random()
	}
	
	formater_reponse_client() {
	    // formate la réponse côté client (entrainement seulement)
	    return {
	        numerateur: parseInt(document.getElementsByName(this.inputHautID)[0].value),
	        denominateur: parseInt(document.getElementsByName(this.inputBasID)[0].value)
	    }
	}
	
	verifier(reponse) {
        // vérifier si la réponse donnée (formaté dans un objet ayant pour attribut `rep`) est bonne
        if (reponse.denominateur == 0) { return {verdict: false, message: "Un dénominateur ne peut être égal à 0 !"} }
        if (!Number.isInteger(reponse.denominateur) || !Number.isInteger(reponse.numerateur)) {
            return {verdict: false, message: "Une fraction est composée de nombres entiers !"}
        }
	    if (reponse.numerateur*this.denominateur == reponse.denominateur*this.numerateur) {
            return {verdict: true, message: PGCD(Math.abs(reponse.numerateur), Math.abs(reponse.denominateur))==1?"Vrai":"Vrai, mais simplifiable"}
	    }
		return {verdict: false, message: "Faux"}
	}
}
