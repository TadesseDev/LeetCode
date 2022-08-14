/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result='';
    let M=Math.floor(num/1000);
    num-=M*1000;
    result+='M'.repeat(M)
    if(Math.floor(num/900)==1){
    result+='CM'
        num-=900;
    }
    
    let D=Math.floor(num/500);
    num-=D*500;
    result+='D'.repeat(D)
    if(Math.floor(num/400)==1){
    result+='CD'
        num-=400;
    }
    
    let C=Math.floor(num/100);
    num-=C*100;
    result+='C'.repeat(C)
    
    if(Math.floor(num/90)==1){
    result+='XC'
        num-=90;
    }
    
    let L=Math.floor(num/50);
    num-=L*50;
    result+='L'.repeat(L)
    
    if(Math.floor(num/40)==1){
    result+='XL'
        num-=40;
    }
    
    let X=Math.floor(num/10);
    num-=X*10;
    result+='X'.repeat(X)
    
    if(Math.floor(num/9)==1){
    result+='IX'
        num-=9;
    }
    
    let V=Math.floor(num/5);
    num-=V*5;
    result+='V'.repeat(V)
    
    if(Math.floor(num/4)==1){
    result+='IV'
        num-=4;
    }
    
    result+='I'.repeat(num)
    return result;
};