import { start, Config } from "@glue42/server";

const mongoURI = "mongodb://127.0.0.1:27017/iomanager";

const startServer = async () => {
    const config: Config = {
        name: "test-server",
        port: 4356,
        base: "api",
        store: {
            type: "mongo",
            connection: mongoURI,
        },
        token: {
            secret: "<CHANGE_ME>" // N.B. generate a new random string
        },
        auth_method: "basic",      
        auth_basic: {
            predefinedUsers: ["admin:admin"]
        }
    };

    await start(config);
}

startServer();
