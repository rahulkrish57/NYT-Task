let apiUrl = "https://api.nytimes.com/svc/topstories/v2/"
let apiKey = ".json?api-key=WANWzf4FAFy646ZcGW6Y4D4xMW4s0qu1"
let container = document.querySelector(".container");
let row = document.querySelector("#row");
let col = document.querySelector("#col");
let row1 = newElem("div", "row");

container.append(row1);

/*
let container = newElem("div", "container", "containerId");
let row = newElem("div", "row");
let header = newElem("div","header");
let logo = newElem("img","logo");
logo.setAttribute("src", "nyt.png");
logo.setAttribute("alt", "NYT");

let section = ["home", "world", "politics", "magazine", "technology", "science", "health", "sports", "arts", "fashion", "food", "travel"];
var col = document.createElement("div");
    col.setAttribute("class","col-md-12");
for(i = 0; i<section.length; i++){ 
    var button = document.createElement("button");
    button.setAttribute("class","btn btn-outline-dark");
    button.setAttribute("id", section[i]);
    button.innerHTML = section[i].toUpperCase();
    col.append(button);
    };
    
    header.append(logo);
    */

async function apiFunc(sec) {
    try{
        row1.innerHTML = " ";

        var res = await fetch(apiUrl+sec+apiKey);
        var data = await res.json();
        console.log(data);
      for (i = 0; i < 10; i++) {
          
        console.log(data.results[i].url);
        var urlnews = data.results[i].url;
        var newsHead = data.results[i].title;
        var abstract = data.results[i].abstract;
        let col1 = newElem("div", "col-sm-6");
        let card = newElem("div", "card");
        let cardBody = newElem("div", "card-body");
        let h5 = newElem("h5", "card-title");
        h5.innerHTML = newsHead;
        console.log(newsHead)
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
