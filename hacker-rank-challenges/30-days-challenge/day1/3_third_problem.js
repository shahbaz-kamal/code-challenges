const N=24
if(N%2===1){
    console.log("Weird")
}

if((N%2===0) && N>=2 && N<=5){
    console.log("Not Weird")
}
if((N%2===0) && N>=6 && N<=20){
    console.log("Weird")
}
if((N%2===0) && N>20){
    console.log("Not Weird")
}