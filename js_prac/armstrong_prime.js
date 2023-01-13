function isPrime(a){
    let temp = 0;
    for(let i=2; i<a; i++){
        if(a%i==0){
            temp+=1;
        }
    }
    if(temp==0) return true;
    return false;
}

function isArmstrong(a){
    let digits = String(a).length;
    let sum = 0;
    let n = a;
    while(n>0){
        let m = n%10;
        sum+=Math.pow(m, digits);
        n=parseInt(n/10);
    }
    if(sum == a) return true;
    return false;
}

if(isArmstrong(153)) console.log("Armstrong");
else console.log("Not Armstrong")


if(isPrime(7)) console.log("Prime")
else console.log("Not Prime")




