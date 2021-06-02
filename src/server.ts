import 'reflect-metadata';
import 'configs/database/mongodb';
import { ApolloServer, ServerInfo } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import { serverEnv } from 'configs/envConfig';

import { VideoResolver } from 'video/resolvers/VideoResolver';

const bootstrap = async () => {
	const schema = await buildSchema({ resolvers: [VideoResolver] });

	const server = new ApolloServer({ schema });

	server.listen({ port: serverEnv.port })
    .then(({ url }: ServerInfo) =>
        console.log(`✅ Server is running on ${url}`)
    )
    .catch((err: Error) => console.log(`☑️ Server error: ${err.message}`));
};

bootstrap();
