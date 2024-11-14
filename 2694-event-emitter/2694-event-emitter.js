class EventEmitter {
     subscriptions = {}
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        let index = 0;
        if(this.subscriptions[eventName]){
            this.subscriptions[eventName].push(callback)
            index = this.subscriptions[eventName].length-1
        }
        else
            this.subscriptions[eventName] = [callback]
        // console.log(this.subscriptions)
        return {
            unsubscribe: () => {
                this.subscriptions[eventName][index] = null
                return
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const result = []
        const callbacks = this.subscriptions[eventName]
        if(callbacks){
            for(let callBack of callbacks){
                callBack && result.push(callBack(...args))
            }
        }
        return result; 
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */