
function oddval(maxnum){
    for(let i = 1; i<maxnum; i+=2)
    console.log(i)
}

//oddval(20)
//===============================================================================================

function div3(minnum){
    for(let i = 100; i > minnum; i--){
        if(i % 3 === 0){
            console.log(i)
        }
    }
}

//div3(0)
//================================================================================================

function sequence(minnum){
    for(let i = 4; i>minnum; i-=1.5)
    console.log(i)
}

//sequence(-4)
//================================================================================================
let sum= 0

function sigma(maxnum){
    for( let i = 0; i<=maxnum; i ++){
        sum = i + sum
    }
    console.log(sum)
}

//sigma(100)
//=================================

let product= 1

function factorial(maxnum){
    for( let i = 1; i<=maxnum; i ++){
        product = product * i
    }
    console.log(product)
}

//factorial(12)
//=================================