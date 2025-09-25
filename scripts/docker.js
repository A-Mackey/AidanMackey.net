// Usage: `node ./docker.js <stage>` ex: `node ./docker.js beta`
const path = require('path');
const { execSync } = require('child_process');
const dotenv = require('dotenv');

// Determine stage from command-line argument or fallback to environment variable
const stage = process.argv[2] || process.env.STAGE || 'beta';

// Load the corresponding .env file
const envPath = path.resolve(__dirname, `../.env.${stage}`);
console.log(`Loading environment from: ${envPath}`);
dotenv.config({ path: envPath });

// Build Docker image
console.log(`Building Docker image for stage: ${stage}`);
execSync(
  `docker build --build-arg STAGE=${stage} -t aidan-mackey-net-${stage} .`,
  { stdio: 'inherit' }
);

// Deploy via Docker Compose
console.log(`Deploying Docker Compose for stage: ${stage}`);
execSync(
  `docker compose --env-file ${envPath} up -d`,
  { stdio: 'inherit' }
);
