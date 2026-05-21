import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams) => {
  return {
    connection: {
      client: "postgres",

      connection: {
        host: env("DATABASE_HOST", "127.0.0.1"),

        port: env.int("DATABASE_PORT", 5432),

        database: env(
          "DATABASE_NAME",
          "ecommerce_poc"
        ),

        user: env(
          "DATABASE_USERNAME",
          "postgres"
        ),

        password: env(
          "DATABASE_PASSWORD",
          "postgres"
        ),

        schema: env(
          "DATABASE_SCHEMA",
          "public"
        ),

        ssl: {
          rejectUnauthorized: false,
        },
      },

      pool: {
        min: 0,
        max: 10,
      },

      acquireConnectionTimeout: 60000,
    },
  };
};

export default config;