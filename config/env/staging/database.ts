import path from "path";

export default ({ env }) => {
    const client = env("DATABASE_CLIENT", "postgres");

    const connections = {
        postgres: {
            connection: {
                host: env("DATABASE_HOST"),
                port: env.int("DATABASE_PORT", 5432),
                database: env("DATABASE_NAME"),
                user: env("DATABASE_USERNAME"),
                password: env("DATABASE_PASSWORD"),

                ssl: env.bool("DATABASE_SSL", true)
                    ? {
                        rejectUnauthorized: env.bool(
                            "DATABASE_SSL_SELF",
                            false
                        ),
                    }
                    : false,

                schema: env("DATABASE_SCHEMA", "public"),
            },

            pool: {
                min: env.int("DATABASE_POOL_MIN", 2),
                max: env.int("DATABASE_POOL_MAX", 20),
            },
        },

        sqlite: {
            connection: {
                filename: path.join(
                    __dirname,
                    "..",
                    "..",
                    "..",
                    ".tmp",
                    "data.db"
                ),
            },
            useNullAsDefault: true,
        },
    };

    return {
        connection: {
            client,
            ...connections[client],

            acquireConnectionTimeout: env.int(
                "DATABASE_CONNECTION_TIMEOUT",
                60000
            ),
        },
    };
};