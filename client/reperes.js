class Repere {
    // classe permettant de construire un repère
	constructor(Xmin, Ymin, Xmax, Ymax) {
		this.canvas = document.createElement("canvas")
        this.canvas.style.width = "405px";
        this.canvas.style.height = "405px";
        this.canvas.width = 810;
        this.canvas.height = 810;
		this.ctx = this.canvas.getContext('2d');
		this.Xmin = Xmin
		this.Xmax = Xmax
		this.Ymin = Ymin
		this.Ymax = Ymax
		this.ctx.font = "32px sans";
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
	}

    point(X, Y) {
        // (X;Y) sont les coordonnées dans le repère
        // (x;y) sont les coordonnées en pixels dans le canvas
        const x = 5+(X-this.Xmin)*800/(this.Xmax-this.Xmin)
        const y = 5+(Y-this.Ymax)*800/(this.Ymin-this.Ymax)
        return {X, Y, x, y}
    }

	fleche(A, B) {
        this.ctx.strokeStyle = 'black'
        // Calculs des coordonnées des points C, D et E 
        const AB = Math.sqrt(Math.pow(B.X-A.X,2)+Math.pow(B.Y-A.Y,2));
        const C = this.point(B.X+0.2*(A.X-B.X)/AB, B.Y+0.2*(A.Y-B.Y)/AB)
        const D = this.point(C.X+0.25*(-(B.Y-A.Y))/AB, C.Y+0.25*((B.X-A.X))/AB)
        const E = this.point(C.X-0.25*(-(B.Y-A.Y))/AB, C.Y-0.25*((B.X-A.X))/AB)
        // et on trace le segment [AB], et sa flèche: 
        this.ctx.beginPath(); 
        this.ctx.moveTo(A.x,A.y);
        this.ctx.lineTo(B.x,B.y); 
        this.ctx.moveTo(D.x,D.y);
        this.ctx.lineTo(B.x,B.y);
        this.ctx.lineTo(E.x,E.y); 
        this.ctx.stroke(); 
	}
	
	dessinerAxes() {
        this.ctx.lineWidth = 3;
	    this.fleche(this.point(0, this.Ymin), this.point(0, this.Ymax))
	    this.fleche(this.point(this.Xmin, 0), this.point(this.Xmax, 0))
        this.ctx.lineWidth = 1;
	}
	
	dessinerGrille(stepX, stepY) {
	    this.ctx.strokeStyle = 'gray'
	    for (let X=this.Xmin; X<=this.Xmax; X+=stepX) {
	        const A = this.point(X, this.Ymin)
	        const B = this.point(X, this.Ymax)
	        this.ctx.beginPath();
	        this.ctx.moveTo(A.x,A.y);
	        this.ctx.lineTo(B.x,B.y);
	        this.ctx.stroke();
	    }
	    for (let Y=this.Ymin; Y<=this.Ymax; Y+=stepY) {
	        const A = this.point(this.Xmin, Y)
	        const B = this.point(this.Xmax, Y)
	        this.ctx.beginPath();
	        this.ctx.moveTo(A.x,A.y);
	        this.ctx.lineTo(B.x,B.y);
	        this.ctx.stroke();
	    }
	    this.noeudsGrille = []
	    for (let X=this.Xmin; X<=this.Xmax; X+=stepX) {
	        for (let Y=this.Ymin; Y<=this.Ymax; Y+=stepY) {
	            this.noeudsGrille.push(this.point(X, Y))
	        }
	    }
	}
	
	graduerAxes(stepX, stepY) {
	    this.ctx.strokeStyle = 'black'
        this.ctx.lineWidth = 2;
	    for (let X=stepX; X<this.Xmax; X+=stepX) {
	        const A = this.point(X, 0)
	        this.ctx.beginPath();
	        this.ctx.moveTo(A.x,A.y+15);
	        this.ctx.lineTo(A.x,A.y-15);
            this.ctx.fillText(X, A.x, A.y+35);
	        this.ctx.stroke();
	    }
	    for (let X=-stepX; X>this.Xmin; X-=stepX) {
	        const A = this.point(X, 0)
	        this.ctx.beginPath();
	        this.ctx.moveTo(A.x,A.y+15);
	        this.ctx.lineTo(A.x,A.y-15);
            this.ctx.fillText(X, A.x, A.y+35);
	        this.ctx.stroke();
	    }
	    for (let Y=stepX; Y<this.Ymax; Y+=stepY) {
	        const A = this.point(0, Y)
	        this.ctx.beginPath();
	        this.ctx.moveTo(A.x-15,A.y);
	        this.ctx.lineTo(A.x+15,A.y);
            this.ctx.fillText(Y, A.x-35, A.y);
	        this.ctx.stroke();
	    }
	    for (let Y=-stepX; Y>this.Ymin; Y-=stepY) {
	        const A = this.point(0, Y)
	        this.ctx.beginPath();
	        this.ctx.moveTo(A.x-15,A.y);
	        this.ctx.lineTo(A.x+15,A.y);
            this.ctx.fillText(Y, A.x-35, A.y);
	        this.ctx.stroke();
	    }
	    const O = this.point(0,0)
        this.ctx.fillText("0", O.x-15, O.y+25);
        this.ctx.lineWidth = 1;
	}
	
	dessinerPoint(P, nom = null, position = "N") {
	    const delta = {"N":{x:0, y:-35},"S":{x:0, y:35},"E":{x:35, y:0},"W":{x:-35, y:0},}
        this.ctx.lineWidth = 2;
	    this.ctx.beginPath();
        this.ctx.moveTo(P.x-15,P.y);
        this.ctx.lineTo(P.x+15,P.y);
        this.ctx.moveTo(P.x,P.y-15);
        this.ctx.lineTo(P.x,P.y+15);
        if (nom) {this.ctx.fillText(nom, P.x+delta[position].x, P.y+delta[position].y)}
        this.ctx.stroke();
        this.ctx.lineWidth = 1;
	}
	
	handleClick(event) {
	    this.ctx.putImageData(this.image, 0, 0)
	    const S = {x:2*(event.pageX - this.canvas.offsetLeft), y:2*(event.pageY - this.canvas.offsetTop)};
	    const [M, ...L] = this.noeudsGrille.filter(P => (P.x-S.x)**2 + (P.y-S.y)**2 < 400)
	    this.ctx.strokeStyle = 'blue'
	    this.ctx.fillStyle = 'blue'
	    if (M) {
			if (M.x == 0) {this.dessinerPoint(M, "P", "E")}
			else if (M.y == -1) {this.dessinerPoint(M, "P", "S")}
			else {this.dessinerPoint(M, "P", "N")}
			this.pointChoisi = M
	    } else {
	        this.pointChoisi = undefined
	    }
	    this.ctx.strokeStyle = 'black'
	    this.ctx.fillStyle = 'black'
	}
	
	laisserChoisirPoint(nom) {
	    this.image = this.ctx.getImageData(0, 0, 810, 810)
	    this.canvas.addEventListener("click", this.handleClick.bind(this))
	}
}
