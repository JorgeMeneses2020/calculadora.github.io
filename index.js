
window.addEventListener('load', () => {

    var btn_cinco = document.querySelector('#btn5');
    var btn_diez = document.querySelector('#btn10');
    var btn_quince = document.querySelector('#btn15');
    var btn_cincue = document.querySelector('#btn50');
    var btn_cincin = document.querySelector('#btn55');
    var ent_custom = document.querySelector('#custom');
    var ent_bill = document.querySelector('#bill');
    var ent_persons = document.querySelector('#persons');
    var ent_amount = document.querySelector('#amount');
    var ent_total = document.querySelector('#vtotal');
    var subtotal = 0.00;
    var total = 0.00;
    var amount = 0.00;

    function calculate(porc) {
        var valor = ent_bill.value;
        var person = ent_persons.value;
        if (isNaN(parseFloat(valor))) {
            alert('Por favor revise el valor ingresado')
            return;
        }
        if (ent_persons.value == 0) {
            alert('Por favor ingrese el numero de personas')
            return;
        }
        amount = valor * porc / person;

        ent_amount.value = "$" + amount;
        console.log(amount);
        subtotal = valor / person;
        total = amount + subtotal;
        total = "$" + total;
        ent_total.value = total;

    }
    btn_cinco.addEventListener('click', () => {
        calculate(0.05);
    });
    btn_diez.addEventListener('click', () => {
        calculate(0.1);
    });
    btn_quince.addEventListener('click', () => {
        calculate(0.15);
    });
    btn_cincue.addEventListener('click', () => {
        calculate(0.5);
    });
    btn_cincin.addEventListener('click', () => {
        calculate(0.55);
    });
    ent_custom.addEventListener('keyup', () => {
        var val = ent_custom.value;
        calculate(val / 100);
    });


})