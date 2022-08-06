// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var lista = Object.entries(objeto);
  return lista;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto={};

  for (var c of string) {      
      objeto[c]=0;
  }

  var claves = Object.keys(objeto);
  for(var i=0;i<string.length; i++){
      for(var j=0;j<claves.length; j++){
          if(claves[j]===string[i]){
              objeto[claves[j]]++;
          }
      }        
  }
  // ordenar las keys del objeto alfabeticamente
  var objOrdenado={};
  Object.keys(objeto).sort().forEach(function(i) {
      objOrdenado[i]=objeto[i];
  });

  return objOrdenado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus ="";
  var minus ="";
  for(var i=0;i<s.length; i++){
      if(s[i]===s[i].toUpperCase()){            
          mayus+=(s[i]);
      }else{
          minus+=(s[i]);
      }
  }
  s=mayus.concat(minus);
  return s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arreglo = str.split(" ");
  var nuevoArreglo =[];
  for(i in arreglo){
      var alreves="";
      for(var j=arreglo[i].length-1; j>=0;j--){
          alreves+=arreglo[i][j];
      }
      nuevoArreglo.push(alreves);
  }
  strAlreves=nuevoArreglo.join(' ');
  return strAlreves;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var texto=numero.toString();
  for(i in texto){
      console.log(i, texto[i], texto[texto.length-1-i], texto.length-1-i);
      if(texto[i]!==texto[texto.length-1-i]){
          return "No es capicua";
      }
  }
  return "Es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  var nuevoTexto="";
  for(i in cadena){
      if(cadena[i]!=="a" && cadena[i]!=="b" && cadena[i]!=="c"){
          nuevoTexto+=cadena[i];
      }
  }
  return nuevoTexto;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var longitud=[]
  for(i in arr){
      longitud[i]=[arr[i].length, arr[i]];
  }
  longitud.sort(function(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
  });
  var nuevoArreglo=[];
  for(i in longitud){
      nuevoArreglo[i]=longitud[i][1];
  }
  return nuevoArreglo;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  arreglo1=arreglo1.sort();
  arreglo2=arreglo2.sort();
  var union=[];
  for(i in arreglo1){
      for(j in arreglo2){
          if(arreglo1[i]===arreglo2[j]){
              union.push(arreglo1[i]);
          }
      }
  }
  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

