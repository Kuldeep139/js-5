// for loop
for(let i=0 ; i<=5 ; i++){
    console.log(i);
}

// While
let a =7;
while(a > 0){
    console.log(a);
    a--;
}


// For Loop 

for(let x=1 ; x<=10 ; x++){
    console.log(x*2);
}
// other method

for(let x=2 ; x<=20 ; x=x+2){
    console.log(x)
}


// While loop

let y = 2;
while(y <= 20){
    console.log(y);
    y=y+2;
}


// Do While Loop[]
let c = 2;
do{
    console.log(c)
    c=c+2;
}while(c <=20)


// for - in loop

let name="Kuldeep";
let games = ["PUBG" , "BGMI" , "VALORANT" , "GTA5"];

for(let a in games){
    console.log(a);
}

// for - of loop

for(let values of games){
    console.log(values);
}

// for - each Loop


games.forEach((index,values)=>{ // the first parameter accept the values of the array and the second parameter accepts the indexes of the array.
    console.log(values,index);
})