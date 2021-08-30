//Código del cuadrado
console.group("Cuadrados");
const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado ** 2;

console.groupEnd();

//Código del triángulo
console.group("Triángulo");

const perimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;

const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

//Código del circulo
console.group("Círculos");

//Diametro
const diametroCirculo = (radio) => radio * 2;

//PI
/* const PI = 3.1415 */
const PI = Math.PI;

//Circunferencia
const circunferenciaCirculo = (radio) => {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
};

//Área
const areaCirculo = (radio) => radio ** 2 * PI;
console.groupEnd();

//Operaciones del cuadrado
const resCuadrado = document.getElementById("output--cuadrado");
const inputCuadrado = document.getElementById("inputCuadrado");
let medidaCuadrado = document.getElementById("medidaCuadrado");

const ladosCuadrado = document.querySelectorAll("div[class^=cuadradoLado]");
const lado3Cuadrado = document.getElementsByClassName("cuadradoLado3")[0];
const lado4Cuadrado = document.getElementsByClassName("cuadradoLado4")[0];

inputCuadrado.addEventListener("input", () => {
  //lados adaptables al tamaño de digitos
  if (inputCuadrado.value > 9) {
    lado3Cuadrado.style.right = "-3.5rem";
    lado4Cuadrado.style.left = "-3.5rem";
  }
  if (inputCuadrado.value > 99) {
    lado3Cuadrado.style.right = "-4.5rem";
    lado4Cuadrado.style.left = "-4.5rem";
  }
  if (inputCuadrado.value <= 9) {
    lado3Cuadrado.style.right = "-3rem";
    lado4Cuadrado.style.left = "-3rem";
  }

  //respuesta
  if (inputCuadrado.value <= 0) {
    inputCuadrado.value = "";
    ladosCuadrado.forEach((item) => {
      item.innerHTML = "";
      resCuadrado.innerHTML = "";
    });
  } else {
    ladosCuadrado.forEach((item) => {
      item.innerHTML = "";
      item.innerHTML = `${inputCuadrado.value} ${medidaCuadrado.value}`;
    });
  }
});

medidaCuadrado.addEventListener("input", () => {
  if (inputCuadrado.value <= 0) {
    inputCuadrado.value = "";
    ladosCuadrado.forEach((item) => {
      item.innerHTML = "";
    });
  } else {
    ladosCuadrado.forEach((item) => {
      item.innerHTML = "";
      item.innerHTML = `${inputCuadrado.value} ${medidaCuadrado.value}`;
    });
  }
});

function calcularPerimetroCuadrado(lado = inputCuadrado.valueAsNumber) {
  const perimetro = perimetroCuadrado(lado);
  perimetro == 0 || isNaN(perimetro)
    ? (resCuadrado.innerHTML = `Ingresa un dato mayor a 0`)
    : (resCuadrado.innerHTML = `El perimetro del cuadado es <strong>${perimetro} ${medidaCuadrado.value}</strong>`);
}
function calcularAreaCuadrado(lado = inputCuadrado.valueAsNumber) {
  const area = areaCuadrado(lado);
  area == 0 || isNaN(area)
    ? (resCuadrado.innerHTML = `Ingresa un dato mayor a 0`)
    : (resCuadrado.innerHTML = `El área del cuadado es <strong>${area} ${medidaCuadrado.value}<sup>2</sup></strong>`);
}

//Operaciones del triangulo
const resTriangulo = document.getElementById("output--triangulo");
const inputTriangulo1 = document.getElementById("inputTriangulo1");
const inputTriangulo2 = document.getElementById("inputTriangulo2");
const inputTriangulo3 = document.getElementById("inputTriangulo3");
let tipoTriangle = document.getElementById("tipoTriangle");
const optionsTriangle = tipoTriangle.options;
let imgTriangle = document.querySelector("#triangulo>img");

let sec_triangulo = document.getElementById("sec_triangulo");

tipoTriangle.addEventListener("input", () => {
  let res = tipoTriangle.value;
  let img =
    res == optionsTriangle[3].value
      ? (imgTriangle.src = imgTriangle.src.replace("triangle", "rTriangle"))
      : (imgTriangle.src = imgTriangle.src.replace("rTriangle", "triangle"));
  let calculos ;
  if (res == optionsTriangle[0].value) {
    console.log(res);
  } else if (res == optionsTriangle[1].value) {
    console.log(res);
  } else if (res == optionsTriangle[2].value) {
    console.log(res);
  } else if (res == optionsTriangle[3].value) {
    console.log(res);
  }
});

function calcularPerimetroTriangulo(
  lado1 = inputTriangulo1.valueAsNumber,
  lado2 = inputTriangulo2.valueAsNumber,
  base = inputTriangulo3.valueAsNumber
) {
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  perimetro == 0 || isNaN(perimetro)
    ? (resTriangulo.innerHTML = `Ingresa un dato mayor a 0`)
    : (resTriangulo.innerHTML = `El perimetro del triangulo es <strong>${perimetro} cm</strong>`);
}
function calcularAreaTriangulo(
  base = inputTriangulo3.valueAsNumber,
  altura = inputTriangulo1.valueAsNumber
) {
  const area = areaTriangulo(base, altura);
  area == 0 || isNaN(area)
    ? (resTriangulo.innerHTML = `Ingresa un dato mayor a 0`)
    : (resTriangulo.innerHTML = `El área del triangulo es <strong>${area} cm<sup>2</sup></strong>`);
}

//Operaciones del circulo
const resCirculo = document.getElementById("output--circulo");
const inputCirculo = document.getElementById("inputCirculo");

function calcularDiametroCirculo(radio = inputCirculo.valueAsNumber) {
  const diametro = diametroCirculo(radio);
  diametro == 0 || isNaN(diametro)
    ? (resCirculo.innerHTML = `Ingresa un dato mayor a 0`)
    : (resCirculo.innerHTML = `El perimetro del circulo es <strong>${diametro} cm</strong>`);
}
function calcularCircunferenciaCirculo(radio = inputCirculo.valueAsNumber) {
  const circunferencia = circunferenciaCirculo(radio).toFixed(2);
  circunferencia == 0 || isNaN(circunferencia)
    ? (resCirculo.innerHTML = `Ingresa un dato mayor a 0`)
    : (resCirculo.innerHTML = `El circunferencia del circulo es <strong>${circunferencia} cm</strong>`);
}
function calcularAreaCirculo(radio = inputCirculo.valueAsNumber) {
  const area = areaCirculo(radio).toFixed(2);
  area == 0 || isNaN(area)
    ? (resCirculo.innerHTML = `Ingresa un dato mayor a 0`)
    : (resCirculo.innerHTML = `El área del circulo es <strong>${area} cm<sup>2</sup></strong>`);
}
