# Use official Node.js image as a base
FROM node:22 AS builder

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the app's files
COPY . .

# Build the Next.js app
RUN npm run build

# --- Runtime Stage ---
FROM node:22 AS runner

# Set working directory
WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm install --omit=dev

# Expose port 3000 for the Next.js server
EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "run", "start"]

