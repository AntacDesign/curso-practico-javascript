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
const circunferenciaCirculo =(radio)=>{
    const diametro = diametroCirculo(radio);
    return diametro* PI
};

//Área
const areaCirculo =(radio)=> (radio ** 2) * PI;
console.groupEnd();

//Operaciones del cuadrado
const resCuadrado = document.getElementById('output--cuadrado');
const inputCuadrado = document.getElementById('inputCuadrado');

inputCuadrado.addEventListener('focusin',()=>
{
    resCuadrado.innerHTML=``;
    if(inputCuadrado.value == 0 || isNaN(inputCuadrado.value))
    {
        inputCuadrado.value = '1'
    };
});

function calcularPerimetroCuadrado(lado = inputCuadrado.valueAsNumber){
    const perimetro = perimetroCuadrado(lado);
    (perimetro == 0 || isNaN(perimetro)) ?
    resCuadrado.innerHTML=`Ingresa un dato mayor a 0`
    : 
    resCuadrado.innerHTML=`El perimetro del cuadado es <strong>${perimetro} cm</strong>`
    ;
}
function calcularAreaCuadrado(lado = inputCuadrado.valueAsNumber){
    const area = areaCuadrado(lado);
    (area == 0 || isNaN(area)) ?
    resCuadrado.innerHTML=`Ingresa un dato mayor a 0`
    : 
    resCuadrado.innerHTML=`El área del cuadado es <strong>${area} cm</strong>`
    ;
}

//Operaciones del triangulo
const resTriangulo = document.getElementById('output--triangulo');
const inputTrianguloLado1 = document.getElementById('inputTrianguloLado1');
const inputTrianguloLado2 = document.getElementById('inputTrianguloLado2');
const inputTrianguloBase = document.getElementById('inputTrianguloBase');

inputTrianguloLado1.addEventListener('focusin',()=>
{
    resTriangulo.innerHTML=``;
    if(inputTrianguloLado1.value == 0 || isNaN(inputTrianguloLado1.value)){
        inputTrianguloLado1.value = '1';
    };
    if(inputTrianguloLado2.value == 0 || isNaN(inputTrianguloLado2.value)){
        inputTrianguloLado2.value = '1';
    }
    if(inputTrianguloBase.value == 0 || isNaN(inputTrianguloBase.value)){
        inputTrianguloBase.value = '1';
    }
});
inputTrianguloLado2.addEventListener('focusin',()=>
{
    resTriangulo.innerHTML=``;
    if(inputTrianguloLado1.value == 0 || isNaN(inputTrianguloLado1.value)){
        inputTrianguloLado1.value = '1';
    };
    if(inputTrianguloLado2.value == 0 || isNaN(inputTrianguloLado2.value)){
        inputTrianguloLado2.value = '1';
    }
    if(inputTrianguloBase.value == 0 || isNaN(inputTrianguloBase.value)){
        inputTrianguloBase.value = '1';
    }
});
inputTrianguloBase.addEventListener('focusin',()=>
{
    resTriangulo.innerHTML=``;
    if(inputTrianguloLado1.value == 0 || isNaN(inputTrianguloLado1.value)){
        inputTrianguloLado1.value = '1';
    };
    if(inputTrianguloLado2.value == 0 || isNaN(inputTrianguloLado2.value)){
        inputTrianguloLado2.value = '1';
    }
    if(inputTrianguloBase.value == 0 || isNaN(inputTrianguloBase.value)){
        inputTrianguloBase.value = '1';
    }
});

function calcularPerimetroTriangulo(lado1 = inputTrianguloLado1.valueAsNumber,lado2 = inputTrianguloLado2.valueAsNumber,base = inputTrianguloBase.valueAsNumber){
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    (perimetro == 0 || isNaN(perimetro)) ?
    resTriangulo.innerHTML=`Ingresa un dato mayor a 0`
    : 
    resTriangulo.innerHTML=`El perimetro del triangulo es <strong>${perimetro} cm</strong>`
    ;
}
function calcularAreaTriangulo(base = inputTrianguloBase.valueAsNumber, altura = inputTrianguloLado1.valueAsNumber){
    const area = areaTriangulo(base,altura);
    (area == 0 || isNaN(area)) ?
    resTriangulo.innerHTML=`Ingresa un dato mayor a 0`
    : 
    resTriangulo.innerHTML=`El área del triangulo es <strong>${area} cm</strong>`
    ;
}

//Operaciones del circulo
const resCirculo = document.getElementById('output--circulo');
const inputCirculo = document.getElementById('inputCirculo');

inputCirculo.addEventListener('focusin',()=>
{
    resCirculo.innerHTML=``;
    if(inputCirculo.value == 0 || isNaN(inputCirculo.value))
    {
        inputCirculo.value = '1'
    };
});

function calcularDiametroCirculo(radio = inputCirculo.valueAsNumber){
    const diametro = diametroCirculo(radio);
    (diametro == 0 || isNaN(diametro)) ?
    resCirculo.innerHTML=`Ingresa un dato mayor a 0`
    : 
    resCirculo.innerHTML=`El perimetro del circulo es <strong>${diametro} cm</strong>`
    ;
}
function calcularCircunferenciaCirculo(radio = inputCirculo.valueAsNumber){
    const circunferencia = circunferenciaCirculo(radio);
    (circunferencia == 0 || isNaN(circunferencia)) ?
    resCirculo.innerHTML=`Ingresa un dato mayor a 0`
    : 
    resCirculo.innerHTML=`El circunferencia del circulo es <strong>${circunferencia} cm</strong>`
    ;
}
function calcularAreaCirculo(radio = inputCirculo.valueAsNumber){
    const area = areaCirculo(radio);
    (area == 0 || isNaN(area)) ?
    resCirculo.innerHTML=`Ingresa un dato mayor a 0`
    : 
    resCirculo.innerHTML=`El área del circulo es <strong>${area} cm</strong>`
    ;
}