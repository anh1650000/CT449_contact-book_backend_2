const app = require('./app');
const config = require('./app/config');
const MongoDB = require('./app/utils/mongodb.util');

// Start the server
async function startServer() {
    try {
        // Connect to MongoDB
        await MongoDB.connect(config.db.uri);
        console.log('Connected to MongoDB');

        // Start Express server
        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on http://${config.app.host}:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();