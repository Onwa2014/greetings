var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var output = document.querySelector('#output');
var radio = document.querySelector(".radio");
var counter = document.querySelector('.counter')
var lang = "";
var count = 0;


radio.addEventListener('change', function(e){
  lang = e.target.value;
});

var greet = function(){
  if(lang === "English"){
  output.innerHTML = "Hello, " + input.value;
  counter.innerHTML = count ++
  }
else if(lang === "Espanol"){
  output.innerHTML = "Hola, " + input.value;
  counter.innerHTML = count ++
  }
  else if(lang === "Setswana"){
  output.innerHTML = "Dumela, " + input.value;
  counter.innerHTML = count ++
  }
  else if(lang === "TshiVenda"){
  output.innerHTML = "Ndaa/Aaa, " + input.value;
  counter.innerHTML = count ++
  }
}
