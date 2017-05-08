
function squadMiembro(nombre, apellido, edad, hobbies){ //agre
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbies = hobbies;
  }

function crearSquad(){
  var miembros = [];

  var berenice = new squadMiembro("Berenice ", "Ríos", 28, ["vegetariana", "meditar", "hacer panes"]);
  var macarena = new squadMiembro("Macarena ", "Baltra", 27, ["engrampar", "sonreir", "hacer ejercicios"]);
  var ratita = new squadMiembro("Rati ", "Grez", 24, ["vestir de negro", "ratones", "estar en familia"]);
  var claudia = new squadMiembro("claudia ", "Gonzalez", 33, ["estudiar", "hacer acupumtura", "estar con familia"]);
  var nicole = new squadMiembro("Nicole ", "Morales", 27, ["comer sano", "editar", "video juegos"]);
  var fram = new squadMiembro("Fram ", "Rodriguez", 35, ["Hacer queques", "estar con su hija", "cocinar"]);
  var susana = new squadMiembro("Susana ", "Arce", 28, ["Mandarme la lista", "Inventar mejores hobbies", "Comer"]);
  var alexa = new squadMiembro("Alexandra ", "Neira", 28, ["Ver series", "Ser dj Master", "explicar código"]);

  miembros.forEach(function(el, i){   //imprimimos la lista en el html
    var contenedor = document.getElementById('contenedor');
    var item = document.createElement('div');
    item.id = 'm' + (i+1);  
