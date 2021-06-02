import 'dotenv/config';
import { DatabaseEnvType, ServerEnvType } from 'types/EnvConfig';

const { DB_HOST, DB_PORT, DB_NAME, SERVER_PORT } = process.env;

const serverEnv: ServerEnvType = {
	port: Number(SERVER_PORT) || 4000,
};

const databaseEnv: DatabaseEnvType = {
	host: DB_HOST || 'localhost',
	port: Number(DB_PORT) || 27017,
	name: DB_NAME || 'apigraphql',
};

export { serverEnv, databaseEnv };
