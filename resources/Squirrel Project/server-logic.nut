class Board
{
	tiles <- [    'r',    'r',    'r',    'r',
			  'r',    'r',    'r',    'r',
			      'r',    'r',    'r',    'r',
			  '0',    '0',    '0',    '0',
			      '0',    '0',    '0',    '0',
			  'b',    'b',    'b',    'b',
			      'b',    'b',    'b',    'b',
			  'b',    'b',    'b',    'b'     ];
	input;
}

Board b;
board_string;

function requestHandler(request, response) {
  try {
    // check if the user sent led as a query parameter
    if ("board" in request.query) {
		b = request.query.board
      }
    }
    // send a response back saying everything was OK.
    response.send(200, "Board recieved.");
  } catch (ex) {
    response.send(500, "Internal Server Error: " + ex);
  }
}

