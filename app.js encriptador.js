const textArea = document.querySelector( ".text-area" );
const mensaje = document.querySelector( ".mensaje" );
const copia = document.querySelector( ".copiar" );
const enc = document.querySelector( ".btn-encriptar" );
const des = document.querySelector( ".btn-desencriptar" );
enc.addEventListener( "click", btnEncriptar );
des.addEventListener( "click", btnDesencriptar );
copia.addEventListener( "click", copiar );  

// saque la matriz de las funciones, para no repetir código
let matrizCodigo = [[ "e", "enter" ], [ "i", "imes" ], [ "a", "ai" ], [ "o", "ober" ], [ "u", "ufat" ]];

function validarTexto() {
  let textoEscrito = document.querySelector( ".text-area" ).value;
  let validador = textoEscrito.match( '/^[a-z]+$/i' );
  
    // cambié el regex porque no funcionaba
  validador = textoEscrito.match( '[a-z]' );

  if( ! validador || validador === 0 ) {
      alert( "Solo son permitidas letras minúsculas y sin acentos" );
      location.reload();
      return true;
  }
}

// eliminé esta función porque estaba repetida... o casi
//function btnEncriptar2() {
//    const textoEncriptado = encriptar( textArea.value )
//    mensaje.value = textoEncriptado
//    textArea.value = "";
//    //mensaje.computedStyleMap.backgroundImage = "none";    
//}

function btnEncriptar() {
  if( ! validarTexto() ) {
      const textoEncriptado = encriptar( textArea.value );
      mensaje.value = textoEncriptado
      mensaje.style.backgroundImage = "none"
      textArea.value = "";
      copia.style.display = "block"    
  }
}

// esta función recibe una cadena sin encriptar, cambiamos
// "stringEncriptada" por "textoParaEncriptar"
function encriptar( textoParaEncriptar ) {  
  // let newStringEncriptada = textoParaEncriptar
  // newStringEncriptada = newStringEncriptada.toLowerCase();
     // reemplazo las dos lineas por:
  let newStringEncriptada = textoParaEncriptar.toLowerCase();   
  for( let i = 0; i < matrizCodigo.length; i++ ) {
      if( newStringEncriptada.includes( matrizCodigo[i][0] )) {
          newStringEncriptada = newStringEncriptada.replaceAll( matrizCodigo[i][0], matrizCodigo[i][1] );
      }
  }
  return newStringEncriptada
}

function btnDesencriptar(){  
     // acá tenemos la situación inversa, asignas el texto desencriptado a una variable llamada "textoEncriptado"
  // const textoEncriptado = desencriptar( textArea.value )
  const textoOriginal = desencriptar( textArea.value );
  mensaje.value = textoOriginal;
  textArea.value = "";    
}

 // y van 3!! recibimos un texto encriptado
// function desencriptar( stringDesencriptada ) { 
function desencriptar( stringEncriptada ) { 
  // let newStringDesencriptada = stringDesencriptada;
  // newStringDesencriptada = newStringDesencriptada.toLowerCase();
     // aplicamos la misma simplificación
  let newStringDesencriptada  = stringEncriptada.toLowerCase();
  for( let i = 0; i < matrizCodigo.length; i++ ) {
      if( newStringDesencriptada.includes( matrizCodigo[i][1] )) {
          newStringDesencriptada = newStringDesencriptada.replaceAll( matrizCodigo[i][1] , matrizCodigo[i][0] );
      }
  }
  return newStringDesencriptada;
}

function copiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
  alert("Texto Copiado")
}
