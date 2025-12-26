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
console.log(`Image tags: ${imageTag}, ${latestTag}`);
execSync(
  `docker build --no-cache --build-arg STAGE=${stage} -t ${imageTag} -t ${latestTag} -f ./docker/Dockerfile .`,
  { stdio: 'inherit' }
);

console.log(`Image built successfully. Checking image ID...`);
const imageId = execSync(`docker images ${latestTag} --format "{{.ID}}"`, { encoding: 'utf-8' }).trim();
console.log(`New image ID: ${imageId}`);

// Stop the old container first to free up the port
console.log(`Stopping old container for stage: ${stage}`);
try {
  execSync(
    `docker compose -f ./docker/docker-compose.${stage.toLocaleLowerCase()}.yml down`,
    { stdio: 'inherit' }
  );
} catch (e) {
  console.log('No existing container to stop');
}

// Start new container with the fresh image
console.log(`Starting new container for stage: ${stage} with image ${imageId}`);
execSync(
  `docker compose -f ./docker/docker-compose.${stage.toLocaleLowerCase()}.yml --env-file ${envPath} up -d --wait --wait-timeout 30`,
  { stdio: 'inherit' }
);

console.log(`Deployment complete. Verifying container is running...`);
execSync(
  `docker compose -f ./docker/docker-compose.${stage.toLocaleLowerCase()}.yml ps`,
  { stdio: 'inherit' }
);

console.log(`\nContainer image details:`);
execSync(
  `docker ps --filter "name=aidan-mackey-net-${stage}" --format "table {{.Names}}\\t{{.Image}}\\t{{.Status}}"`,
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
