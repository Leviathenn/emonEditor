/**
 * @author Leviathenn
 */

$(document).ready(function () {
    const queryString = window.location.search;
    //console.log(queryString);
const urlString = new URLSearchParams(queryString);

const moduleToLoad = urlString.get("module");

//console.log(moduleToLoad);


var scriptElement = document.createElement("script");
scriptElement.src = `js/${moduleToLoad}.js`;
//Now render the script into the document
document.head.appendChild(scriptElement);
});

