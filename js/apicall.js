'use strict';
let _singleton = null;
class fetchdata {
    constructor (data) {

    }

    SingletonOperation () {
        console.log('Api Call')
    }

    GetSingletonData () {
        return this.data
    }
}

const instance = new fetchdata();

export default instance;