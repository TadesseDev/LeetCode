function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    /*
    - set counter to 0
    - iterate throgh the garden by incrementing i by one (condition is i<flowerbed.length and n>count)
        - check if the item is !false and both its nighbour are !false
            - make the item 1   
            - increment i by one 
            - increment counter by 1
    - return counter==n
    */

    let counter=0
    for(let i=0;i<flowerbed.length && n>counter;i++){
        if(!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]){
            i++
            counter++
        }
    }
    return n==counter
};