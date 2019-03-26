
'use strict';
let _singleton = null;
let globalData ={};
class fetchdata {
    constructor (data) {
        
    }

    SingletonOperation (url) {
        fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
        //   console.log(JSON.stringify(myJson));
        globalData = myJson;
        let elementId = document.getElementById('newsDetails');
        let returnHtml = ""
        
         globalData.articles.map((value, index) =>{
           
            returnHtml = `<div>${value.author}</div><div>${value.title}</div><div>${value.description}</div><div>${value.urlToImage}</div><div>${value.publishedAt}</div>`
               
          
        });
        console.log(returnHtml)
        elementId.insertAdjacentHTML('afterend', returnHtml)
        
        });
    }

    // GetSingletonData () {
        
    // }
}

const instance = new fetchdata();

export default instance;