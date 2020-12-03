module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "postgres"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "camtact"),
        username: env("DATABASE_USERNAME", "camtact"),
        password: env("DATABASE_PASSWORD", "2020camtact*!"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
