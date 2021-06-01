# This image makes use of a Node image running on Linux Alpine (latest versions of both)
# Using digest SHA256 increases security
FROM node:lts-alpine@sha256:8d5d490d1e18c9069b34b4a57df1cb3b8cd1b756f2f63f7b8240f39d7c01c402

# Adds a package to act as PID 1 so that Node doesn't take that place.
# Node wasn't built to run as PID 1 and avoiding it prevents unexpected behaviour.
RUN apk add dumb-init

# A work directory is required to be used by npm install
WORKDIR /var/projects/protonmail-themes

# Copy all project files to the container
# Files in the location of this file are copied to WORKDIR in the container
# Scopes permissions to user node instead of root.
COPY --chown=node:node . .

# Install dependencies
RUN npm ci

# Switches user from root to node.
USER node

# The process this container should run
CMD ["dumb-init", "npm", "start"]