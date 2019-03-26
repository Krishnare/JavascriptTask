
'use strict';
let _singleton = null;

class fetchdata {
  constructor(data) {
  }
  SingletonOperation(url) {
    let globalData = {};
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        globalData = myJson;
        let elementId = document.getElementById('newsDetails');
        let returnHtml = "",
          uniqueVal = [];

        globalData.articles.map((value, index) => {
          uniqueVal = `<h1>${value.author}</h1>`
          if (index > 0) {
            uniqueVal = "";
          }
          returnHtml += `${uniqueVal}<div class="newsTitle">${value.title}</div><div class="newsDescription">${value.description}</div><div class="publishDate">${value.publishedAt}</div><div class="imageContainer"><a href="${value.url}" target="_blank"><img src=${value.urlToImage} /></a></div>`;
        });
        console.log(returnHtml);
        elementId.insertAdjacentHTML('afterbegin', returnHtml);
      })
      .catch(error => { console.log("Something went wrong on server") });
  }
}
const instance = new fetchdata();
export default instance;