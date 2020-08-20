class Player {
	
	constructor(playerNum, lifeTotal) {
		this.playerNum = playerNum;
		this.lifeTotal = 0;
		this.commanderDam = 0;
		this.lifeTotal = lifeTotal;
	}

	incLifeTotal(){
		this.lifeTotal++;
		$(".lifeTotal").html(this.lifeTotal);
	}

	decLifeTotal(){
		this.lifeTotal--;
		$( ".lifeTotal" ).html(this.lifeTotal);
	}

	incCommanderDam() {
		this.commanderDam++;
		$( ".commDamage" ).html(this.commanderDam);
	}

	decCommanderDam() {
		this.commanderDam--;
		$( ".commDamage" ).html(this.commanderDam);

	}

	createPlayerBlock() {
		$("body").append("<div class=\"player" + this.playerNum + "\"> \
			<button class=\"decLife\">-</button> <span class=\"lifeTotal\">" + this.lifeTotal + "</span> <button class=\"incLife\">+</button> <br>\
			<button class=\"decComm\">-</button> <span class=\"commDamage\">" + this.commanderDam + "</span> <button class=\"incComm\">+</button>\
			<div>")
	}
}



console.log("da fuq");
var player1 = new Player(1, 40);
player1.createPlayerBlock();

//why do I have to put it in an anonymous function? wtf, mate
$(".decLife").on("click", function(){player1.decLifeTotal();});
$(".incLife").on("click", function(){player1.incLifeTotal();});
$(".decComm").on("click", function(){player1.decCommanderDam();});
$(".incComm").on("click", function(){player1.incCommanderDam();});

