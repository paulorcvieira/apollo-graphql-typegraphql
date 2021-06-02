import { databaseEnv } from 'configs/envConfig';
import mongoose from 'mongoose';

const connectionUrl = `mongodb://${databaseEnv.host}:${databaseEnv.port}/${databaseEnv.name}`;

export default mongoose.connect(connectionUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('✅ MongoDB connected with success'))
	.catch((err: Error) => console.log(`☑️ MongoDB Error: ${err.message}`));
