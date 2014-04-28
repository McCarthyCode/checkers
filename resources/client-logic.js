$(document).ready(function () {
    start ();
	addImages ();
	$('#board').click(function (e) {
		alert(e.parent());
	});
});

function start () {
	// Normally we'd start with the server's values,
	// but we need a temporary solution in which
	// the game always starts on load.
	//$( "#board" ).function({
		$( "#00" ).addClass( "r" );
		$( "#01" ).addClass( "r" );
		$( "#02" ).addClass( "r" );
		$( "#03" ).addClass( "r" );
		$( "#04" ).addClass( "r" );
		$( "#05" ).addClass( "r" );
		$( "#06" ).addClass( "r" );
		$( "#07" ).addClass( "r" );
		$( "#08" ).addClass( "r" );
		$( "#09" ).addClass( "r" );
		$( "#0a" ).addClass( "r" );
		$( "#0b" ).addClass( "r" );
		$( "#14" ).addClass( "b" );
		$( "#15" ).addClass( "b" );
		$( "#16" ).addClass( "b" );
		$( "#17" ).addClass( "b" );
		$( "#18" ).addClass( "b" );
		$( "#19" ).addClass( "b" );
		$( "#1a" ).addClass( "b" );
		$( "#1b" ).addClass( "b" );
		$( "#1c" ).addClass( "b" );
		$( "#1d" ).addClass( "b" );
		$( "#1e" ).addClass( "b" );
		$( "#1f" ).addClass( "b" );
	//});	
};

function content (name) {
	return "<img width=\"30px\" height=\"30px\" "
		 + "src=\"images/game-pieces/"
		 + name
		 + "\" style=\"display: block;\">";
};

function addImages () {
	$('.r').html (content ("red.png"));
	$('.b').html (content ("black.png"));
};

