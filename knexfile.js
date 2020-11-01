// Update with your config settings.

module.exports = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './database/users-tracker.db3',
  },
  migrations: {
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}