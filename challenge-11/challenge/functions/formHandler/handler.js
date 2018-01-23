const queryString = require("query-string");

module.exports.formHandler = (event, context, callback) => {
  const data = queryString.parse(event.body);
  const headers = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      message: "HELLO WORLD!",
      data
    })
  };

  callback(null, response);
};
