'use strict';
let _singleton = null;
class fetchdata {
    constructor (data) {
        if(!_singleton) {
            this.data = data
            _singleton = this
        }
        else
            return _singleton
        
    }

    SingletonOperation () {
        
    }

    GetSingletonData () {
        return this.data
    }
}

const instance = new fetchdata();

export default instance;