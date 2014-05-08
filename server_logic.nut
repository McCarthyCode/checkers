class Board {
	spaces = [     1,      1,      1,      1,
			   1,      1,      1,      1,
				   1,      1,      1,      1,
			   0,      0,      0,      0,
				   0,      0,      0,      0,
			  -1,	  -1,     -1,     -1,
				  -1,	  -1,     -1,     -1,
			  -1,     -1,     -1,     -1	 ]
}

function Board::value() {
	local total = 0
	foreach (val in spaces)
	{
		total += val
	}
	
	return total
}

function Board::asString() {
	local s = ""
	foreach (val in spaces)
	{
		local c
		switch (val)
		{
			case 2:
				c = "R"
				break
			case 1:
				c = "r"
				break
			case -1:
				c = "b"
				break
			case -2:
				c = "B"
				break
			case 0:
			default:
				c = "0"
				break
		}
		s = s + c
	}
	
	return s
}

class Space {
	constructor (num) {
		id = num
		switch (num) {
			case 1:
				c = 5
				d = 6
				D = 10
				break
			case 2:
				c = 6
				d = 7
				C = 9
				D = 11
				break
			case 3:
				c = 7
				d = 8
				C = 10
				D = 12
				break
			case 4:
				c = 8
				C = 11
				break
			case 5:
				b = 1
				d = 9
				D = 14
				break
			case 6:
				a = 1
				b = 2
				c = 9
				d = 10
				C = 13
				D = 15
				break
			case 7:
				a = 2
				b = 3
				c = 10
				d = 11
				C = 14
				D = 16
				break
			case 8:
				a = 3
				b = 4
				c = 11
				d = 12
				C = 15
				break
			case 9:
				a = 5
				b = 6
				c = 13
				d = 14
				B = 2
				D = 18
				break
			case 10:
				a = 6
				b = 7
				c = 14
				d = 15
				A = 1
				B = 3
				C = 17
				D = 19
				break
			case 11:
				a = 7
				b = 8
				c = 15
				d = 16
				A = 2
				B = 4
				C = 18
				D = 20
				break
			case 12:
				a = 8
				c = 16
				A = 3
				C = 19
				break
			case 13:
				b = 9
				d = 17
				B = 6
				D = 22
				break
			case 14:
				a = 9
				b = 10
				c = 17
				d = 18
				A = 5
				B = 7
				C = 21
				D = 23
				break
			case 15:
				a = 10
				b = 11
				c = 18
				d = 19
				A = 6
				B = 8
				C = 22
				D = 24
				break
			case 16:
				a = 11
				b = 12
				c = 19
				d = 20
				A = 7
				C = 23
				break
			case 17:
				a = 13
				b = 14
				c = 21
				d = 22
				B = 10
				D = 26
				break
			case 18:
				a = 14
				b = 15
				c = 22
				d = 23
				A = 9
				B = 11
				C = 25
				D = 27
				break
			case 19:
				a = 15
				b = 16
				c = 23
				d = 24
				A = 10
				B = 12
				C = 26
				D = 28
				break
			case 20:
				a = 16
				c = 24
				A = 11
				C = 27
				break
			case 21:
				b = 17
				d = 25
				B = 14
				D = 30
				break
			case 22:
				a = 17
				b = 18
				c = 25
				d = 26
				A = 13
				B = 15
				C = 29
				D = 31
				break
			case 23:
				a = 18
				b = 19
				c = 26
				d = 27
				A = 14
				B = 16
				C = 30
				D = 32
				break
			case 24:
				a = 19
				b = 20
				c = 27
				d = 28
				A = 25
				C = 31
				break
			case 25:
				a = 21
				b = 22
				c = 29
				d = 30
				B = 18
				break
			case 26:
				a = 22
				b = 23
				c = 30
				d = 31
				A = 17
				B = 19
				break
			case 27:
				a = 23
				b = 24
				c = 31
				d = 32
				A = 18
				B = 20
				break
			case 28:
				a = 24
				c = 32
				A = 19
				break
			case 29:
				b = 25
				B = 22
				break
			case 30:
				a = 25
				b = 26
				A = 21
				B = 23
				break
			case 31:
				a = 26
				b = 27
				A = 22
				B = 24
				break
			case 32:
				a = 27
				b = 28
				A = 23
				break
		}
	}
	
////[A]         [B]
////   [a]   [b]
////       id
////   [c]   [d]
////[C]         [D]
	
	id = 0
	a = 0
	b = 0
	c = 0
	d = 0
	A = 0
	B = 0
	C = 0
	D = 0
}

function Board::playerMove (from, to) {
	
	function moveType () {
		local a = from >> 2 + 1
		local b = to >> 2 + 1
		
		switch (a - b) {
			case 1:
			case -1:
				return 1
				break
			case 2:
			case -2:
				return 2
				break
			default:
				return 0
		}
	}
	
	function move () {
		function valid() {
			local current = Space(from)
			
			switch (spaces[from-1]) {
				case -2:
					if ((current.c != 0 && !spaces[current.c-1]) ||
						(current.d != 0 && !spaces[current.d-1]))
						return 1
				case -1:
					if ((current.a != 0 && !spaces[current.a-1]) ||
						(current.b != 0 && !spaces[current.b-1]))
						return 1
				default:
					return 0
			}
		}
		
		if (valid()) {
			spaces[to-1] = spaces[from-1]
			spaces[from-1] = 0
		} else {
			print ("ERROR")
			print ("\n")
		}
	}
	
	function jump (from, to) {
	
	}
	
	local a = from >> 2 + 1
	local b = to >> 2 + 1
	
	switch (a - b) {
		case 1:
		case -1:
			move()
			break
		case 2:
		case -2:
			jump (from, to)
	}
}

///////////////////////////////////////////////////////////////////////////////


Board.spaces <- [	  0,      0,      0,      0,
				  0,      0,      0,      0,
					  0,      0,      0,      0,
				  0,      1,      0,      0,
					 -1,     -1,      0,      0,
				 -1,      1,      0,      0,
					  0,     -1,     -2,      0,
				  0,      0,      0,      0		]


//local derp = Space(1)
//print ("derp.D: " + derp.D + "\n")

//Board.playerMove(24, 19)

local a = Board.value()

print (a)
print ("\n")
print (Board.asString())
print ("\n")