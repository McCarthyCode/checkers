var BOARD_STRING;

$(document).ready(function () {
	setInterval( getValues, 1000 );
	start();
});

function play () {
	addImages();
	$("textarea").html("Click a black checker to start.");
	select();
	
	$("td").click(function () {
		var active = $("td.active");
		var target = $(this);
		
		var activeID = active.attr("id");
		var targetID = target.attr("id");
		
		var activeRow = active.parent().attr("id");
		var targetRow = target.parent().attr("id");
		
		if (target.hasClass("available")) {
			switch (activeRow - targetRow) {
				case 2:
				case -2:
					$("textarea").html(
						"Your vote: Jump from space " + activeID + " to " + targetID + ".\n" +
						"Page will refresh once votes have been cast."
					);
					break;
				case 1:
				case -1:
					$("textarea").html(
						"Your vote: Move from space " + activeID + " to " + targetID + ".\n" +
						"Page will refresh once vote has been cast."
					);
					break;
			}
		}
	});
}

function select () {
	$("img").click(function () {
		event.preventDefault();
		var target = $(this);
		var space = target.closest("td.b, td.B");
		var spaces = $("td.black");
		
		spaces.removeClass("active");
		spaces.removeClass("available");
		space.addClass("active");
		
		var id = $(".active").attr("id");
		
		neighbors(id);
		if (space.hasClass("B"))
			king_neighbors(id);
		
		$("textarea").html("Now click on a blue space to make your move.");
	});
}

function neighbors (id) {
	var a = 0;
	var b = 0;
	var A = 0;
	var B = 0;
	
	switch (id * 1) {
		default:
		case 1:
		case 2:
		case 3:
		case 4:
			break;
		case 5:
			b = 1;
			break;
		case 6:
			a = 1;
			b = 2;
			break;
		case 7:
			a = 2;
			b = 3;
			break;
		case 8:
			a = 3;
			b = 4;
			break;
		case 9:
			a = 5;
			b = 6;
			B = 2;
			break;
		case 10:
			a = 6;
			b = 7;
			A = 1;
			B = 3;
			break;
		case 11:
			a = 7;
			b = 8;
			A = 2;
			B = 4;
			break;
		case 12:
			a = 8;
			A = 3;
			break;
		case 13:
			b = 9;
			B = 6;
			break;
		case 14:
			a = 9;
			b = 10;
			A = 5;
			B = 7;
			break;
		case 15:
			a = 10;
			b = 11;
			A = 6;
			B = 8;
			break;
		case 16:
			a = 11;
			b = 12;
			A = 7;
			break;
		case 17:
			a = 13;
			b = 14;
			B = 10;
			break;
		case 18:
			a = 14;
			b = 15;
			A = 9;
			B = 11;
			break;
		case 19:
			a = 15;
			b = 16;
			A = 10;
			B = 12;
			break;
		case 20:
			a = 16;
			A = 11;
			break;
		case 21:
			b = 17;
			B = 14;
			break;
		case 22:
			a = 17;
			b = 18;
			A = 13;
			B = 15;
			break;
		case 23:
			a = 18;
			b = 19;
			A = 14;
			B = 16;
			break;
		case 24:
			a = 19;
			b = 20;
			A = 15;
			break;
		case 25:
			a = 21;
			b = 22;
			B = 18;
			break;
		case 26:
			a = 22;
			b = 23;
			A = 17;
			B = 19;
			break;
		case 27:
			a = 23;
			b = 24;
			A = 18;
			B = 20;
			break;
		case 28:
			a = 24;
			A = 19;
			break;
		case 29:
			b = 25;
			B = 22;
			break;
		case 30:
			a = 25;
			b = 26;
			A = 21;
			B = 23;
			break;
		case 31:
			a = 26;
			b = 27;
			A = 22;
			B = 24;
			break;
		case 32:
			a = 27;
			b = 28;
			A = 23;
			break;
	}
	
	if ((a == 0) && (b == 0))
		return;
	
	var spaceA;
	var spaceB;
	
	if (a != 0) {
		spaceA = $("td#" + a + ".black");
		if (spaceA.hasClass("b") ||
			spaceA.hasClass("B")) {
			a = 0;
		} else if (spaceA.hasClass("r") || spaceA.hasClass("R")) {
			a = A;
			spaceA = $("td#" + a + ".black");
			if ((spaceA.hasClass("b") ||
				 spaceA.hasClass("B") ||
				 spaceA.hasClass("r") ||
				 spaceA.hasClass("R"))) {
				a = 0;
			} else {
				//neighbors(A);
			}
		}
	}
	
	if (b != 0) {
		spaceB = $("td#" + b + ".black");
		if (spaceB.hasClass("b") ||
			spaceB.hasClass("B")) {
			b = 0;
		} else if (spaceB.hasClass("r") || spaceB.hasClass("R")) {
			b = B;
			spaceB = $("td#" + b + ".black");
			if ((spaceB.hasClass("b") ||
				 spaceB.hasClass("B") ||
				 spaceB.hasClass("r") ||
				 spaceB.hasClass("R"))) {
				b = 0;
			} else {
				//neighbors(B);
			}
		}
	}
	
	if (a != 0)
		spaceA.addClass("available");
	
	if (b != 0)
		spaceB.addClass("available");
}

function king_neighbors (id) {
	var a = 0;
	var b = 0;
	var A = 0;
	var B = 0;
	
	switch (id * 1) {
		default:
		case 1:
			a = 5;
			b = 6;
			B = 10;
		case 2:
			a = 6;
			b = 7;
			A = 9;
			B = 11;
		case 3:
			a = 7;
			b = 8;
			A = 10;
			B = 11;
		case 4:
			a = 8;
			A = 11;
			break;
		case 5:
			b = 9;
			B = 14;
			break;
		case 6:
			a = 9;
			b = 10;
			A = 13;
			B = 15;
			break;
		case 7:
			a = 10;
			b = 11;
			A = 14;
			B = 16;
			break;
		case 8:
			a = 11;
			b = 12;
			A = 15;
			break;
		case 9:
			a = 13;
			b = 14;
			B = 18;
			break;
		case 10:
			a = 14;
			b = 15;
			A = 17;
			B = 19;
			break;
		case 11:
			a = 15;
			b = 16;
			A = 18;
			B = 20;
			break;
		case 12:
			a = 16;
			A = 19;
			break;
		case 13:
			b = 17;
			B = 22;
			break;
		case 14:
			a = 17;
			b = 18;
			A = 21;
			B = 23;
			break;
		case 15:
			a = 18;
			b = 19;
			A = 22;
			B = 24;
			break;
		case 16:
			a = 19;
			b = 20;
			A = 23;
			break;
		case 17:
			a = 21;
			b = 22;
			B = 26;
			break;
		case 18:
			a = 22;
			b = 23;
			A = 25;
			B = 27;
			break;
		case 19:
			a = 23;
			b = 24;
			A = 26;
			B = 28;
			break;
		case 20:
			a = 24;
			A = 27;
			break;
		case 21:
			b = 25;
			B = 30;
			break;
		case 22:
			a = 25;
			b = 26;
			A = 29;
			B = 31;
			break;
		case 23:
			a = 26;
			b = 27;
			A = 30;
			B = 32;
			break;
		case 24:
			a = 27;
			b = 28;
			A = 31;
			break;
		case 25:
			a = 29;
			b = 30;
			break;
		case 26:
			a = 30;
			b = 31;
			break;
		case 27:
			a = 31;
			b = 32;
			break;
		case 28:
			a = 32;
			break;
		case 29:
		case 30:
		case 31:
		case 32:
			break;
	}
	
	if ((a == 0) && (b == 0))
		return;
	
	var spaceA;
	var spaceB;
	
	if (a != 0) {
		spaceA = $("td#" + a + ".black");
		if (spaceA.hasClass("b") ||
			spaceA.hasClass("B")) {
			a = 0;
		} else if (spaceA.hasClass("r") || spaceA.hasClass("R")) {
			a = A;
			spaceA = $("td#" + a + ".black");
			if ((spaceA.hasClass("b") ||
				 spaceA.hasClass("B") ||
				 spaceA.hasClass("r") ||
				 spaceA.hasClass("R"))) {
				a = 0;
			} else {
				//neighbors(A);
				//king_neighbors(A);
			}
		}
	}
	
	if (b != 0) {
		spaceB = $("td#" + b + ".black");
		if (spaceB.hasClass("b") ||
			spaceB.hasClass("B")) {
			b = 0;
		} else if (spaceB.hasClass("r") || spaceB.hasClass("R")) {
			b = B;
			spaceB = $("td#" + b + ".black");
			if ((spaceB.hasClass("b") ||
				 spaceB.hasClass("B") ||
				 spaceB.hasClass("r") ||
				 spaceB.hasClass("R"))) {
				b = 0;
			} else {
				//neighbors(B);
				//king_neighbors(B);
			}
		}
	}
	
	if (a != 0)
		spaceA.addClass("available");
	
	if (b != 0)
		spaceB.addClass("available");
}

function start () {
	$("textarea").html("Loading content...");
	$.get("https://agent.electricimp.com/pO5IMo2Ad63q?board",
	function(result) {
		BOARD_STRING = result;
		updateValues(result);
		addImages();
		select();
		play();
	});
}

function content (name) {
	return "<img " + "src=\"images/game-pieces/" + name + "\">";
};

function getValues () {
	$.get("https://agent.electricimp.com/pO5IMo2Ad63q?board",
	function(result) {
		if (result != BOARD_STRING) {
			start();
			console.log("NOT all good");
		} else {
			console.log("all good");
		}
	});
	
}

function updateValues (string) {
	for (var i = 0; i < 32; i++)
		updateValue (i + 1, string[i]);
}

function updateValue (id, value) {
	$("td#" + id).attr("class", "black " + value);
}

function addImages () {
	$('.0').html("");
	$('.r').html(content("red.svg"));
	$('.b').html(content("black.svg"));
	$('.R').html(content("red_king.svg"));
	$('.B').html(content("black_king.svg"));
};
