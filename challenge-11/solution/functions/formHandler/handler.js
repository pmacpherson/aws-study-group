const dynogels = require('dynogels-promisified');
const Joi = require('joi');
const queryString = require('query-string');

const { USER_TABLE } = process.env;
const User = dynogels.define('User', {
  hashKey: 'id',

  tableName: USER_TABLE,

  // add the timestamp attributes (updatedAt, createdAt)
  timestamps: true,

  schema: {
    id: dynogels.types.uuid(),
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string().email(),
    address: Joi.string(),
    province: Joi.string(),
    postal: Joi.string(),
  },
});

module.exports.formHandler = (event, context, callback) => {
  const data = queryString.parse(event.body);
  const headers = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
  };

  console.log('data', data);
  User.createAsync(data)
    .then(() => {
      const response = Object.assign({}, headers, {
        body: JSON.stringify({
          message: 'SUCCESS: Form was submitted to DB!',
        }),
      });
      callback(null, response);
    })
    .catch(err => {
      const response = Object.assign({}, headers, {
        body: JSON.stringify({
          message: 'FAIL: Form was not saved to DB!',
          error: err,
        }),
      });
      callback(null, response);
    });
};
