function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    let counter=0
    for(let i=0;i<flowerbed.length && n>counter;i++){
        if(!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]){
            i++
            counter++
        }
    }
    return n==counter
};