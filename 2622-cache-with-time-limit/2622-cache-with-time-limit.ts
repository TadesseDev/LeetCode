class TimeLimitedCache {
    /*
    1. initialize the store
    */
    store: Record<number, {value?: number, timeout?: number}>;
    constructor() {
        this.store = {}
    }
    /*
    2. check if the key already exits 
        2.1 if yes, cancel the timeout function for the key 
    3. create a timeout cuntion that would delete the key from the store 
        3.1 add the timout value alongside the key (key: {value: '', timeout: ''})
        3.2 ad the value to the key
    */
    set(key: number, value: number, duration: number): boolean {
        const referStore = this.store
        let exist = false
      if(referStore[key]){
        clearTimeout(referStore[key].timeout)
        exist=true
      }  
      const timeout = setTimeout(()=>{
        delete referStore[key]
      }, duration);
      referStore[key]={}
      referStore[key].value = value
      referStore[key].timeout = Number(timeout)
      return exist
    }
    /*
    1. return the value for the kyey or -1
    */
    get(key: number): number {
        return this.store[key]?.value || -1
    }
    
    count(): number {
        return Object.keys(this.store).length
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */