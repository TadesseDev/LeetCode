function maxArea(height: number[]): number {
    let i=0, j=height.length-1;
    let imax = 0, jmax = 0, maxHeight=0;
    while(i<j){
        let ih = height[i]
        let jh = height[j]
        if(ih<imax){
            i++
            continue;
        } else {
            imax = ih
        }
         if (jh<jmax) {
            j--
            continue
        } else {
            jmax = jh
        }

        let newHeight = Math.min(ih, jh) * (j-i);
        if(newHeight>maxHeight){
            maxHeight=newHeight;
        }

        if(ih<jh){
            i++
        } else {
            j--
        }
    }

    return maxHeight;
};