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
        facade.log("Singleton class created")
    }

    SingletonOperation () {
        facade.log('SingletonOperation')
    }

    GetSingletonData () {
        return this.data
    }
}

const instance = new fetchdata();

export default instance;