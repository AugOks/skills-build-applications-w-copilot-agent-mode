import app from './app.js';
import { connectToDatabase } from './config/database.js';
const PORT = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME || process.env.CODEPSPACE_NAME;
const publicBaseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
async function startServer() {
    try {
        await connectToDatabase();
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`OctoFit backend listening on port ${PORT}`);
            console.log(`Public API URL: ${publicBaseUrl}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}
startServer();
