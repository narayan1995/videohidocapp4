var newElement = document.createElement("h2");
newElement.textContent="Hi This is Narayan";
document.querySelector("body").appendChild(newElement);

var newElement2 = document.createElement("h1");
newElement2.textContent="Hi, This is seond element";
document.querySelector("body").appendChild(newElement2);

var newElement3 = document.createElement("span");
newElement3.textContent="Hi, This is span fro javascript";
document.querySelector("body").appendChild(newElement3);

const uri = document.documentURI;
console.log(`current url is ${uri}`);
 var links = document.links;
 console.log(`current links are ${links.length}`);

 availablePlugins = document.plugins;
 console.log(`available plugins are ${availablePlugins}`);