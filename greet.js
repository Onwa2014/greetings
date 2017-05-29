var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var output = document.querySelector('#output');
var radio = document.querySelector(".radio");
var counter = document.querySelector('.counter')
var lang = "";
var count = 1;

var greetedNames = {}

counter.innerHTML = localStorage.clickcount;

radio.addEventListener('change', function(e){
  lang = e.target.value;
});

var greet = function(){
  var name = input.value;
  if(lang === "English" && greetedNames[name] === undefined && name.length >0){ // alikho
      output.innerHTML = "Hello, " + name;
      var container  = clickCounter();
      greetedNames[name] = name;
  }
  else if(lang === "English" && greetedNames[name] !== undefined && name.length >0){ // likhona
    output.innerHTML = "Hello, " + name; //bulisa qha
  // counter.innerHTML = count ++
  // var container  = clickCounter();
  }

else if(lang === "Espanol" && greetedNames[name] === undefined && name.length >0){
  output.innerHTML = "Hola, " + name;
  var container  = clickCounter();
  greetedNames[name] = name;
  }
  else if(lang === "Espanol" && greetedNames[name] !== undefined && name.length >0){
    output.innerHTML = "Hola, " + name;

    }

  else if(lang === "Setswana" && greetedNames[name] === undefined && name.length >0){
    output.innerHTML = "Dumela, " + name;
    greetedNames[name] = name;
   var container  = clickCounter();
  }
  else if(lang === "Setswana" && greetedNames[name] !== undefined && name.length >0){
    output.innerHTML = "Dumela, " + name;

  }
  else if(lang === "TshiVenda" && greetedNames[name] === undefined && name.length >0){
    output.innerHTML = "Ndaa/Aaa, " + name;
    greetedNames[name] = name;
   var container  = clickCounter();
  }
  else if(lang === "TshiVenda" && greetedNames[name] !== undefined && name.length >0){
    output.innerHTML = "Ndaa/Aaa, " + name;
  }

}
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        counter.innerHTML = localStorage.clickcount;
    } else {
        counter.innerHTML = "Sorry, your browser does not support web storage...";
    }
}
