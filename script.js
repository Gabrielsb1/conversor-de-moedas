const amount = document.getElementById("amount");

// Manipulando o input amount para receber somente números. 
amount.addEventListener("input", ()=>{
    //hasCharactersRegex verifica caracteres do tipo texto.
    const hasCharactersRegex = /\D+/g;

    console.log(amount.value)
    // replace vai substituir por nada, as strings encontradas no regex
    amount.value = amount.value.replace(hasCharactersRegex, "")
    
})