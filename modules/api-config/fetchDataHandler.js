const axios = require("axios");
const fetchDataHandler = async (url) => {
  try {
    const fetchedData = await axios.get(url);
    return fetchedData.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = fetchDataHandler;
