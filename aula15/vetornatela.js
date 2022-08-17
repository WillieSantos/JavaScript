let num = [8, 4, 5, 6, 7, 8, 9, 0]

/*
for(let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
} */


for ( let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 