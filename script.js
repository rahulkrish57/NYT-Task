let apiUrl = "https://api.nytimes.com/svc/topstories/v2/"
let apiKey = ".json?api-key=WANWzf4FAFy646ZcGW6Y4D4xMW4s0qu1"


var nav = newElem( "nav", "navbar navbar-expand-lg navbar-light bg-light" );
        let div = newElem( "div", "container" );
        let link = newElem( "a","navbar-brand" );
        link.setAttribute( "href", "#" );
        link.innerText = "Navbar";

        div.append(link);
        nav.append(div);
        document.body.append(nav)



async function apiFunc() {
    try{
        var res = await fetch(apiUrl+"world"+apiKey);
        var data = await res.json();
        console.log(data.results[0].abstract); 
    } catch (err) {
        console.log(err.message);
    }
}
apiFunc();

function newElem (elem, elemClass, elemID)
{
    var elemEnt = document.createElement(elem);
    elemEnt.setAttribute("class", elemClass);
    elemEnt.setAttribute("id", elemID);
    return elemEnt;
}
