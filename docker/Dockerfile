FROM node:22 AS builder

# Setup work directory, install, build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Runtime Stage
FROM node:22 AS runner
WORKDIR /app
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm install --omit=dev

# Expose port 3000 for the Next.js server
EXPOSE 3000

CMD ["npm", "run", "start"]

