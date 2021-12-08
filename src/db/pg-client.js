const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  post: 5432,
  user: "postgres",
  password: "123123",
  database: "energy_watch"
});

// Client methods are wrapped around a function so logging
// would be implemented in the future
module.exports = {
  query: (text, params) => client.query(text, params),
  connect: () => client.connect(),
};
