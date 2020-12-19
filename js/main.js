let D = ExpantaNum;

var OpenedBasics = D(0)
var C = D(0)
var U = D(0)
var R = D(0)
var E = D(0)
var L = D(0)


function N(num) {
	if (num.lt(1e6)) return num.toString();
	if (num.lt("ee6"))
		return (
			Math.pow(10, num.log10().toNumber() % 1)
				.toFixed(2)
				.replace(/([0-9]+(.[0-9]+[1-9])?)(.?0+$)/, "$1") +
			"e" +
			num.log10().floor().toString()
		);
	if (num.lt("eee6")) return "e" + N(num.log10());
	return num.toString();
};

function updateGUI() {
	document.getElementById("C").textContent = "Commons: " + " " + N(C)
	document.getElementById("U").textContent = "Uncommons: " + " " + N(U)
	document.getElementById("R").textContent = "Rares: " + " " + N(R)
	document.getElementById("E").textContent = "Epics: " + " " + N(E)
	document.getElementById("L").textContent = "Legendaries: " + " " + N(L)
}

function btnClick() {
	var y = Math.random() * 100;
		if (y < 45) {
			console.log("Common");
			C = D.add(C, 1);
		}
		else if (y < 75) {
			console.log("U");
			U = D.add(U, 1);
		}
		else if (y < 94) {
			console.log("R");
			R = D.add(R, 1);
		}
		else if (y < 99.7) {
			console.log("E");
			E = D.add(E, 1);
		}
		else {
			console.log("L");
			L = D.add(L, 1);
		}
	OpenedBasics = D.add(OpenedBasics, 1)
	console.log(N(OpenedBasics))
}

function tick() {

}


window.setInterval(function() {
    updateGUI()
}, 0.00001);