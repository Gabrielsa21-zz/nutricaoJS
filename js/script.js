var pacientes = document.querySelectorAll('.paciente')

for(var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaEhValido = true;
    var pesoEhValido = true;


    if (peso <= 0 || peso > 500) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso invalido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3) {
        console.log("Altura invalida!");
        tdImc.textContent = "Altura invalida";
        alturaEhValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValido && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "dados invalidos";
    }
}
