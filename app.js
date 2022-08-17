const inputTexto = document.getElementById("entrada");
const btnCopiar = document.getElementById("btn-copiar");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const inputResultado = document.getElementById("input-value");
const btnLimpiar = document.getElementById("btn-limpiar");
const soloLetras ='^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
  btnEncriptar.addEventListener('click', encriptarTexto);
  btnEncriptar.addEventListener('click', quitarMensaje);
  btnDesencriptar.addEventListener('click', desencriptarTexto);
  btnDesencriptar.addEventListener('click', quitarMensaje);
  btnCopiar.addEventListener('click', copiarTexto);
  btnLimpiar.addEventListener('click', limpiar)
});

function limpiar(){
  document.getElementById("entrada").value = "";
  document.getElementById("input-value").value = "";
  document.getElementById("mensaje-img").style.display = 'block';
  document.getElementById('input-value').style.display = 'none';
    
}

function quitarMensaje(){
  document.getElementById("mensaje-img").style.display = 'none';
  document.getElementById("input-value").style.display = 'block';
}
function quitarTextArea(){
  document.getElementById('input-value').style.display = 'none';
}

function alertaError(){
  swal("", "Solo se permiten letras minúsculas, sin acentos", "error");
}

function encriptarTexto(e) {
  e.preventDefault();
  inputResultado.value = '';
  let texto = inputTexto.value;
  
  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(' ');
    let nuevasPalabras = [];
    
    for (let palabra of palabras) {
      palabra = palabra.replaceAll('e','enter');
      palabra = palabra.replaceAll('i','imes');
      palabra = palabra.replaceAll('a','ai');
      palabra = palabra.replaceAll('o','ober');
      palabra = palabra.replaceAll('u','ufat');      
      
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } else {
      alertaError();
    return;
  }  
}

function desencriptarTexto(e) {
  e.preventDefault();  
  inputResultado.value = '';
  let texto = inputTexto.value;

  if(texto.match(soloLetras)!=null){
    let palabras = texto.split(" ");
    let nuevasPalabras = [];    

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('enter','e');
      palabra = palabra.replaceAll('imes','i');
      palabra = palabra.replaceAll('ai','a');
      palabra = palabra.replaceAll('ober','o');
      palabra = palabra.replaceAll('ufat','u');
      nuevasPalabras.push(palabra);    
    }

    const resultado = nuevasPalabras.join(' ');
    
    inputResultado.value = resultado;
  } else {
    alertaError();
    return;
  }  
}

function copiarTexto(e) {
    e.preventDefault(); 
    const mensaje = inputResultado.value;

    navigator.clipboard.writeText(mensaje);
}
