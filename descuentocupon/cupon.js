const precio = document.querySelector(".precio").value;
const descuento = document.querySelector(".descuento");
const button =document.querySelector(".button");
const resultado =document.querySelector(".resultado");
const valor= document.createElement("p");
const formatterPeso = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});
const cupones = {
  cupon1:20,
  cupon2:30,
  cupon3:50,
};

let claves =Object.keys(cupones);
let formula;

const addClassBlue= ()=> {
  valor.classList.add("valor");
  valor.classList.remove("valormal");
};
const removeClassBlue= ()=> {
  valor.classList.add("valormal");
  valor.classList.remove("valor");
};



button.addEventListener("click", mostrarResultado);



function mostrarResultado() {
    
    let b = claves.find(dis = (nombre) => {
        return nombre==descuento.value;
            } );  

    console.log(b==descuento.value)
if (b==descuento.value){
  formula = (Number(precio)* (100 - Number(cupones[descuento.value]) ) /100);
  resultado.appendChild(valor);
  valor.innerHTML="El valor final de tu compra es: "+formatterPeso.format(formula);
  addClassBlue();
  descuento.value="";
  

}else{
  resultado.appendChild(valor);
  valor.innerHTML="Por favor digita un cupon correcto";
  descuento.value="";
  removeClassBlue();

}
    
    
}