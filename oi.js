function Palindromo(palavra){
    if(palavraContrario(palavra) === palavra){
        return true;
    }
    else{
        return false;
    }
}

function palavraContrario(palavra){
    let contrario = ''
    for(let i = palavra.length - 1; i >= 0; i--){
        contrario = contrario + palavra[i];
    }
    return contrario;
}

module.exports = {Palindromo, palavraContrario};