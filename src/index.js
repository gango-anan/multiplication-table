// Demonstrating event propagation

import './styles.css';

// find table
const table = document.getElementById("multiplication");
const tcols = table.getElementsByTagName("col");

// delegate event handler
table.addEventListener( "mouseover", TableHandler );
table.addEventListener( "mouseout", TableHandler );

// event handler
function TableHandler(e) {

	let t = e.target;
	if (t.nodeName != "TD") return;
	
	// let cName = ( e.type == "mouseover" ? "active" : "");
	// t.parentNode.className = cName;
	// tcols[ t.cellIndex ].className = cName;

	t.parentNode.className = tcols[ t.cellIndex ].className =
	( e.type == "mouseover" ? "active" : "");
	
}