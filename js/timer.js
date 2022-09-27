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


iniciar.addEventListener('click', function() {
    if (this.innerHTML == "Pausar") {
        this.innerHTML = "Continuar"
        clearInterval(interval);
    } else if (this.innerHTML == "Continuar"){
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

cancelar.addEventListener('click', function(){
    clearInterval(interval)
    horaAtual = "00"
    minutoAtual = "00"
    segundoAtual = "00"
    document.getElementById('toque').pause();
    horaminuto();
    display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual

})

function horaminuto (){
    horaAtual = horaAtual.toString().padStart(2,"0");
    minutoAtual = minutoAtual.toString().padStart(2,"0");
    segundoAtual = segundoAtual.toString().padStart(2,"0");
}