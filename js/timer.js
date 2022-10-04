//Variaveis
var display = document.getElementById("timer-tempo");
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
var iniciar = document.getElementById("iniciar--pausar");
var cancelar = document.getElementById("cancelar")


var horaAtual;
var minutoAtual;
var segundoAtual;
var interval;

for(var i = 0; i<=60; i++){
    horas.innerHTML += '<option value='+i+'>'+i+'</option>';
}
for(var i = 0; i<=60; i++){
    minutos.innerHTML += '<option value='+i+'>'+i+'</option>';
}
for(var i = 0; i<=60; i++){
    segundos.innerHTML += '<option value='+i+'>'+i+'</option>';
}

//função que faz o calculo no timer sempre diminuindo de segundo em segundo
function calculo (){
    iniciar.innerHTML = "Pausar"
    segundoAtual--;

    if(segundoAtual<=0){
        if (horaAtual>0){
            horaAtual--
            minutoAtual = 60
            segundoAtual = 59
            horaminuto();
        }
        if(minutoAtual>0){
            minutoAtual--
            segundoAtual=59
            horaminuto();
        }
        else {
            document.getElementById('toque').play();
            clearInterval(interval)
            horaAtual = 00
            minutoAtual = 00
            segundoAtual = 00
            horaminuto();
            display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
        }     
    }
    horaminuto();

    display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
}

//Adicionando o evento iniciar e pausar no painel, fazendo com que o calculo inicie e pare respectivamente
//variando dependendo da string exibida no painel
iniciar.addEventListener('click', function() {
    if (this.innerHTML == "Pausar") {
        this.innerHTML = "Iniciar "
        clearInterval(interval);
    } else if (this.innerHTML == "Iniciar "){
        this.innerHTML = "Pausar"
        interval = setInterval(function(){
            calculo();
        }, 1000)

    } else {
        this.innerHTML = "Pausar"
        
        horaAtual = horas.value
        minutoAtual = minutos.value
        segundoAtual = segundos.value
        display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual

        interval = setInterval(function(){
            calculo();
        }, 1000)
    }

})

//Adicionando ao botão cancelar a função de parar o timer e zerar a contagem
cancelar.addEventListener('click', function(){
    clearInterval(interval)
    horaAtual = "00"
    minutoAtual = "00"
    segundoAtual = "00"
    document.getElementById('toque').pause();
    horaminuto();
    display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
    iniciar.innerHTML = "Iniciar";

})

//Configura a exibição no painel, acrescentando um 0 caso não sejam dois digitos via string
function horaminuto (){
    horaAtual = horaAtual.toString().padStart(2,"0");
    minutoAtual = minutoAtual.toString().padStart(2,"0");
    segundoAtual = segundoAtual.toString().padStart(2,"0");
}

//Adiciona eventos nos botões do teclado
document.addEventListener("keydown", function(e){
	if (e.keyCode == 73 ){
        horaAtual = horas.value
        minutoAtual = minutos.value
        segundoAtual = segundos.value
        horaminuto();
        display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
        interval = setInterval(function(){
            calculo();
        }, 1000)
	}
	else if (e.keyCode == 80 ){
        horaminuto();
        display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
        clearInterval(interval);
        this.innerHTML = "Continuar"
	}
    else if (e.keyCode == 67 ){
        clearInterval(interval)
        horaAtual = "00"
        minutoAtual = "00"
        segundoAtual = "00"
        document.getElementById('toque').pause();
        horaminuto();
        display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
        iniciar.innerHTML = "Iniciar";
        horas = 0;
        minutos = 0;
        segundos = 0;
    
	}
    
}, false);