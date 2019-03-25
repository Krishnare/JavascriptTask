
'use strict';
let _singleton = null;

class fetchdata {
    constructor (data) {
        let globalData ={};
    }

    SingletonOperation (url) {
        fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log(JSON.stringify(myJson));
          globalData = JSON.stringify(myJson);
        });
    }

    GetSingletonData () {
        return this.data
    }
}

const instance = new fetchdata();

export default (instance, globalData);