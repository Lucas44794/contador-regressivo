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


iniciar.addEventListener('click', function() {
    horaAtual = horas.value
    minutoAtual = minutos.value
    segundoAtual = segundos.value
    display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual

    interval = setInterval(function(){
        segundoAtual--;

        if(segundoAtual<=0){
            if (horaAtual>0){
                horaAtual--
                minutoAtual = 60
                segundoAtual = 59
                horaAtual = horaAtual < 10 ? "0" + horaAtual : horaAtual;
            }
            if(minutoAtual>0){
                minutoAtual--
                segundoAtual=59
                minutoAtual = minutoAtual < 10 ? "0" + minutoAtual : minutoAtual;
            }    
            else {
                document.getElementById('toque').play();
                clearInterval(interval)
            }     
        }

        


        segundoAtual = segundoAtual < 10 ? "0" + segundoAtual : segundoAtual;

        display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual
    }, 1000)
})

cancelar.addEventListener('click', function(){
    clearInterval(interval)
    horaAtual = 00
    minutoAtual = 00
    segundoAtual = 00
    horaAtual = horaAtual < 10 ? "0" + horaAtual : horaAtual;
    minutoAtual = minutoAtual < 10 ? "0" + minutoAtual : minutoAtual;
    segundoAtual = segundoAtual < 10 ? "0" + segundoAtual : segundoAtual;
    display.innerHTML = horaAtual+":"+minutoAtual+":"+segundoAtual

})