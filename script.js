//cotações de moedas do dia.
const USD = 5.49
const EUR = 6.37
const GBP = 7.44

// Obtendo elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Manipulando o input amount para receber somente números. 
amount.addEventListener("input", ()=>{
    //hasCharactersRegex verifica caracteres do tipo texto.
    const hasCharactersRegex = /\D+/g;

    console.log(amount.value)
    // replace vai substituir por nada, as strings encontradas no regex
    amount.value = amount.value.replace(hasCharactersRegex, "")
    
})


// Caputando o evento de submit (enviar) do formulário
form.onsubmit = (e) => {
    e.preventDefault()

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, 'US$')
            break
        case "EUR":
            convertCurrency(amount.value, EUR, '€')
            break

        case "GBP":
            convertCurrency(amount.value, GBP, '£')
            break
    }

}


// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    
    try {
        // Exibindo a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = amount * price

        if(isNaN(total)) {
            return alert("Por favor, digite o valor corretamente para converter.")
        }

        // Exibe o resultado total
        result.textContent = `${formatCurrencyBRL(total).replace("R$", "")} Reais`


        //aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")



    } catch (error) {
        //remove a classe do footer para remover ele da tela.
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }

}

// formata a moeda em real Brasileiro.
function formatCurrencyBRL(value) {
    //converte para numero para utilizar o tolocalestring para formartar no padrão BRL
    return Number(value).toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL",
    }) 
}