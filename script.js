let apiUrl = "https://api.nytimes.com/svc/topstories/v2/"
let apiKey = ".json?api-key=WANWzf4FAFy646ZcGW6Y4D4xMW4s0qu1"

let container = document.querySelector(".container");
let header = document.querySelector(".header");
let row = document.querySelector("#btnGrp");
let logo = newElem("img", "logo");
    logo.setAttribute("src", "nyt.png");
    logo.setAttribute("alt", "New York Times");

let row1 = document.querySelector("#info");

let col = newElem("div", "col-12");
let section = ['home', 'world', 'politics', 'magazine', 'technology', 'science', 'health', 'sports', 'arts', 'fashion', 'food', 'travel'];
  for(i = 0; i< section.length; i++){
      var arg = section[i];
    var button = document.createElement("button");
    button.setAttribute("class","btn btn-outline-dark");
    button.setAttribute("id", "section[i]");
   button.setAttribute("onclick", "apiFunc(\""+ section[i] + "\")"); // string passed as argument
    button.innerHTML = section[i].toUpperCase();
    col.append(button);
  }
  header.append(logo);
  row.append(col);
async function apiFunc(sec) {
    try{
        row1.innerHTML = " ";

        var res = await fetch(apiUrl+sec+apiKey);
       // console.log(res);
        var data = await res.json();
       console.log(data);
      for (i = 0; i < 10; i++) {
          
        //console.log(data.results[i].url);
        var urlnews = data.results[i].url;
        var newsHead = data.results[i].title;
        var abstract = data.results[i].abstract;
        let col1 = newElem("div", "col-sm-6");
        let card = newElem("div", "card");
        let cardBody = newElem("div", "card-body");
        let h5 = newElem("h5", "card-title");
        h5.innerHTML = newsHead;
       // console.log(newsHead)
        let p = newElem("p", "card-text");
        p.innerHTML = abstract;
        let a = newElem("a", "btn btn-primary")
        a.setAttribute("href", urlnews);
        a.setAttribute("target", "_blank");
        a.innerHTML = "Continue Reading";
        cardBody.append(h5,p,a);
        card.append(cardBody);
        col1.append(card);
        row1.append(col1);
        }
    } catch (err) {
        console.log(err.message);
    }
}


function newElem (elem, elemClass, elemID)
{
    var elemEnt = document.createElement(elem);
    elemEnt.setAttribute("class", elemClass);
    elemEnt.setAttribute("id", elemID);
    return elemEnt;
}
