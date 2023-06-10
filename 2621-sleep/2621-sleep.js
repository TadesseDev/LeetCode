/**
 * @param {number} millis
 */
async function sleep(millis) {
    promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve(1)
    }, millis)
    })
    
    return await promise
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */