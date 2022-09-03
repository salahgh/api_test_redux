const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
    headers: {
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '159861bca2msh874b238e92ccd64p141103jsn36418bbe7b5d',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    }
};

export default function getLanguages () {

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
