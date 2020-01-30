const axios = require('axios');
const { apiUrl } = require("./constants");
axios.get({apiUrl}).then(data => console.log(data));

