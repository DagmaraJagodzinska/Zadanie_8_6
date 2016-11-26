// plik scripts.js

function getTriangleArea(a,h) {
	var result = a*h/2;

	if ( (a <= 0) && (h <= 0) ) {
		console.log('Nieprawidłowe dane');
	}

	return result;

}
getTriangleArea();

console.log( getTriangleArea(10,6) )

var triangle1Area = getTriangleArea(10, 15);
var triangle1Area = getTriangleArea(5, 20);
var triangle1Area = getTriangleArea(6, 20);
