const axios = require("axios");

async function getFirstAlbumTitle() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
    return response.data[0].title;
}

module.exports = getFirstAlbumTitle;
// It fetches an array of albums from an API and returns the title of the first album