function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'        
    } else {
        res.innerHTML = 'Contando: '
        ini = Number(ini.value)
        fim = Number(fim.value)
        pas = Number(pas.value)
        if (pas <= 0) {
            alert('Não é possivel passo 0 ou negativo, considerando passo 1')
            pas = 1
        }
        if (ini < fim) {
            //Contagem Crescente
            for(var c = ini; c <= fim; c += pas) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }   else {
            //Contragem Decrescente
            for(var c = ini; c >= fim; c -= pas)
                res.innerHTML += ` ${c} \u{1F449}`
        }      
        res.innerHTML += ` \u{1F3C1}`
    }  
    
    
}





