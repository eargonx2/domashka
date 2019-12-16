var units = document.getElementsByClassName("unit");
var unitsQuieried = document.querySelectorAll("unit");
var wrapper = document.querySelector(".wrapper");
var wrappUnits = wrapper.getElementsByClassName("unit");

console.log(units.length);

wrapper.innerHTML = "";
console.log(units.length);
console.log(unitsQuieried.length);
console.log(wrappUnits === units)
console.log(wrappUnits[0].getAttribute("key"));

var newDiv = document.createElement("div");


wrapper.appendChild(newDiv);


console.log(unitsQuieried.length);

var wrapper = document.getElementById("wrapper");
​
function cardAsElement(content) {
  var wrapper = document.createElement("div");
  var header = document.createElement("div");
​
  wrapper.classList.add("card__wrapper");
  header.classList.add("card__header");
​
  wrapper.append(header);
  header.appendChild(document.createTextNode(content));
​
  return {
    wrapper: wrapper,
    header: header
  };
}
​
function card(content) {
  return (
    '<div class="card__wrapper"> \
        <div class="card__header"> \
        ' +
    content +
    "\
        </div> \
    </div>"
  );
}
​
var cardElements = cardAsElement("Another card");
​
cardElements.header.classList.add("new--class");
​
wrapper.innerHTML += card("My content");
wrapper.append(cardElements.wrapper);
