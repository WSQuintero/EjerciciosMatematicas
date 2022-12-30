const precio = document.querySelector(".precio");
const descuento = document.querySelector(".descuento");
const button =document.querySelector(".button");
const resultado =document.querySelector(".resultado");
const valor= document.createElement("p");
let formula;
const formatterPeso = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});

button.addEventListener("click", mostrarResultado);

function mostrarResultado() {
  if ( !precio.value || !descuento.value ||precio.value ==0 && descuento.value==0 ){
    resultado.appendChild(valor);
    valor.innerHTML="Por favor agrega algún valor";
    valor.classList.add("valormal");
    valor.classList.remove("valor");
  }else{
    formula = (Number(precio.value)* (100 - Number(descuento.value) ) /100);
    resultado.appendChild(valor);
    valor.innerHTML="El valor final de tu compra es: "+formatterPeso.format(formula);
    console.log(typeof(formula));
    valor.classList.add("valor");
    valor.classList.remove("valormal");
  };
};
