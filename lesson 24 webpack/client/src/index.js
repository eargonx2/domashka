const axios = require('axios');
const { apiUrl } = require("./constants");
axios.get(`${apiUrl}`).then(data => console.log(data));

function getApi() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://swapi.co/api/planets/3/", true);

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    button.innerHTML = "Готово!";

    if (xhr.status != 200) {
      // обработать ошибку
      alert(xhr.status + ": " + xhr.statusText);
    } else {
      // вывести результат
      alert(xhr.responseText);
    }
  };

  button.innerHTML = "Загружаю...";
  button.disabled = true;
}
