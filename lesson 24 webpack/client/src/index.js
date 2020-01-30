const axios = require('axios');
const { apiUrl } = require("./constants");
axios.get("https://swapi.co/api/planets/3/").then(data => console.log(data));

