

//CASA DE CÂMBIO



const url = 'https://economia.awesomeapi.com.br/last/'
const moedas = 'USD-BRL'

fetch(url + moedas)
    .then(function (respostaUrl) {
        return respostaUrl.json()
    })
    .then(function (data) {
        const dolarReal = data.USDBRL
        

        let estaData = new Date(dolarReal.create_date)

        document.getElementById('title').innerHTML = dolarReal.name
        document.getElementById('thisdate').innerHTML = estaData.toLocaleString()
        document.getElementById('maxvalue').innerHTML = parseFloat(dolarReal.high).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        document.getElementById('minvalue').innerHTML = parseFloat(dolarReal.low).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        })


        let btn = document.getElementById('btn')
        btn.addEventListener('click', () => {
            let valor = document.getElementById('conversor').value;
            let numero = parseFloat(valor)
            let numero2 = parseFloat(dolarReal.low)
            let resultado = (numero * numero2).toFixed(2)

            document.getElementById('convertido').innerHTML = `R$ ${resultado}`;
        })
        

    })





