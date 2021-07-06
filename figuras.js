//Código del cuadrado
console.group('Cuadrados');
const perimetroCuadrado = (lado)=> lado * 4;

const areaCuadrado = (lado)=> lado ** 2;

console.groupEnd();

//Código del triángulo
console.group('Triángulo')

const perimetroTriangulo = (lado1,lado2,base)=> lado1 + lado2 + base;

const areaTriangulo = (base,altura)=> (base * altura )/ 2;

console.groupEnd();

//Código del circulo
console.group('Círculos');

//Diametro
const diametroCirculo = (radio)=> radio * 2 ;

//PI
/* const PI = 3.1415 */
const PI = Math.PI;

//Circunferencia
const perimetroCirculo =(radio)=>{
    const diametro = diametroCirculo(radio);
    return diametro* PI
};

//Área
const areaCirculo =(radio)=> (radio ** 2) * PI;
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}