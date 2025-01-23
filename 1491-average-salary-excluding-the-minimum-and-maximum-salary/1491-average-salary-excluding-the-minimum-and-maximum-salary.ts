function average(salary: number[]): number {
    let max = salary[0] > salary[1] ? salary[0] : salary[1];
    let min = salary[0] < salary[1] ? salary[0] : salary[1];
    let totalSum = salary[0] + salary[1];

    for(let i=2;i<salary.length; i++){
        if(salary[i]>=max){
            max=salary[i]
        }else if(salary[i]<=min){
            min=salary[i]
        }
        totalSum+=salary[i]
    }
    console.log(totalSum, max, min)
    return (totalSum - (max+min))/(salary.length - 2)
};