
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
        let duplicateResolve = ""
         globalData.articles.map((value, index) =>{
           if(value.author !== value.author){
            duplicateResolve
           }else{
            duplicateResolve = value.author
           }
            returnHtml += `<h1>${duplicateResolve}</h1><div>${value.title}</div><div>${value.description}</div><div>${value.urlToImage}</div><div>${value.publishedAt}</div>`
               
          
        });
        console.log(returnHtml)
        elementId.insertAdjacentHTML('afterbegin', returnHtml)
        
        });
    }

    // GetSingletonData () {
        
    // }
}

const instance = new fetchdata();

export default instance;