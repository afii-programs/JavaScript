const rand = Math.ceil(Math.random()*10);
console.log(rand);
while(prompt1 != rand){ 
    var prompt1 = Number(prompt("Guess the random number:"));
    if (prompt1 == rand){
        alert("You Win!");
    }
    else{
        alert("Try again");
    }
}
