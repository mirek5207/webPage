function oblicz() {
    //Słówko var -oznacza zmienną; typ tej zmiennej 
    //będzie zależał od jej wartości;
    //Pobierz element o id=l1 do zmiennej l1:
    var quantityCredit = parseInt(document.getElementById('quantityCredit').value);
    var quantityInstallment = parseInt(document.getElementById('quantityInstallment').value);
    var percent = parseInt(document.getElementById('percent').value);

    //Teraz już możemy obliczyć sumę i ustawić wartość pola tekstowego//o id='suma':var
    s = document.getElementById('monthInstallments');
    s.value = (quantityCredit * (percent / 100 / 12)) / (1 - (1 / (Math.pow((1 + percent / 100 / 12), quantityInstallment))));
    t = document.getElementById('SumCreditInstallments');
    t.value = s.value * quantityInstallment;
}

function Calculator(option) {
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);

    switch (option) {
        case '/':
            var score = x / y;
            break;
        case '+':
            var score = x + y;
            break;
        case '-':
            var score = x - y;
            break;
        case '*':
            var score = x * y;
            break;
    }
    document.getElementById('score').value = score;
}