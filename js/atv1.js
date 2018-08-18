//Atividade 1
function ola(){
  var nome = document.getElementById("txt-nome");
  alert("Ola " + nome.value); // + realiza concatenação
}

//Atividade 2
function maiorIdade(){
  var ano = document.getElementById("idade");
  var idade = 2018 - ano.value;
  console.log(ano.value);
  console.log(idade);
  var DataSistema = new Date();
  var anoSistema = DataSistema.getFullYear();
  console.log(DataSistema);
  idade = anoSistema - ano.value;
  console.log("Você possui " + idade + " anos");
}

//Atividade 3
function parOuImpar() {
  var valor = document.getElementById("valor");
  if(((valor.value) % 2) == 0){
    alert("Numero " +  valor.value + " e par!");
  }else {
    alert("Numero " +  valor.value + " e impar!");
  }
}

//Atividade 4
function touch(){
  var userName = prompt("Ola! Qual o seu nome?")
  if(userName){
    alert("Prazer " + userName);
  }
  console.log(document.getElementById("rockImg").src)
  if (document.getElementById("rockImg").src == "file:///C:/Users/042131009/Desktop/algoritmos-javascript/img/rock_happy.png"){
    document.getElementById("rockImg").src = "img/rock.png";
  }else {
    document.getElementById("rockImg").src = "img/rock_happy.png";
  }
}

//Atividade 5
