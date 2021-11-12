// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "database_mysql",
      database: "mydatabase", // use .env here
      user: "root",
      password: "mydatabasepw",
      port: 3306,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
