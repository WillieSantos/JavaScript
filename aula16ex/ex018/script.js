function adicionar () {
    let num = document.getElementById('inum')
    let sel = document.getElementById('isel')
    let n = Number(num.value)   
    

    if (num.value.length == 0 || n > 100 || n < 1) {
        alert('Valor é inválido ou já encontrado na lista')
    } else {
        sel.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`        
        sel.appendChild(item)
        
    }
    
    
    
}

function finalizar () {
    
}