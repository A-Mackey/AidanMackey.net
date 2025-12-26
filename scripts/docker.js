// Usage: `node ./docker.js <stage>` ex: `node ./docker.js beta`
const path = require('path');
const { execSync } = require('child_process');
const dotenv = require('dotenv');

// Determine stage from command-line argument or fallback to environment variable
const stage = process.argv[2] || process.env.STAGE || 'beta';

// Load the corresponding .env file
const envPath = path.resolve(__dirname, `../config/.env.${stage}`);
console.log(`Loading environment from: ${envPath}`);
dotenv.config({ path: envPath });

// Build Docker image with unique timestamp tag AND latest tag
const timestamp = Date.now();
const imageTag = `aidan-mackey-net-${stage}:${timestamp}`;
const latestTag = `aidan-mackey-net-${stage}:latest`;

console.log(`Building Docker image for stage: ${stage}`);
execSync(
  `docker build --build-arg STAGE=${stage} -t ${imageTag} -t ${latestTag} -f ./docker/Dockerfile .`,
  { stdio: 'inherit' }
);

// Pull the new image to ensure it's available
console.log(`Preparing new image...`);

// Update the running containers with the new image using rolling update
// Docker Compose will start new containers before stopping old ones when using --wait
console.log(`Deploying new containers for stage: ${stage} (rolling update)`);
execSync(
  `docker compose -f ./docker/docker-compose.${stage.toLocaleLowerCase()}.yml --env-file ${envPath} up -d --wait --wait-timeout 30`,
  { stdio: 'inherit' }
);

// Clean up old stopped containers
console.log(`Cleaning up old containers`);
execSync(
  `docker container prune -f`,
  { stdio: 'inherit' }
);

// Clean up dangling and old images (keep last 2 tagged versions)
console.log(`Cleaning up old images`);
try {
  execSync(
    `docker images aidan-mackey-net-${stage} --format "{{.ID}} {{.Tag}}" | grep -v latest | tail -n +3 | awk '{print $1}' | xargs -r docker rmi`,
    { stdio: 'inherit' }
  );
} catch (e) {
  console.log('No old tagged images to clean up');
}

execSync('docker image prune -f', { stdio: 'inherit' });
