class Player {
	
	constructor(lifeTotal) {
		this.lifeTotal = 0;
		this.commanderDam = 0;
		this.wins = 0;
		this.losses = 0;
		this.lifeTotal = lifeTotal;
	}

	incLifeTotal(){
		this.lifeTotal++;
	}

	decLifeTotal(){
		this.lifeTotal--;
	}

	incCommanderDam() {
		this.commanderDam++;
	}

	decCommanderDam() {
		this.commanderDam--;
	}
	incWins() {
		this.wins++;
	}

	decWins() {
		this.wins--;
	}
	incLosses() {
		this.losses++;
	}

	decLosses() {
		this.losses--;
	}

	createPlayerBlock() {
		$("body").append("<div class=\"player\"> \
			<button class=\"decLife\">-</button>" + this.lifeTotal + "<button class=\"incLife\">+</button>\
			<div>");
	}
}




