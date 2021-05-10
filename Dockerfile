# This image makes use of a Node image running on Linux Alpine
FROM node:15-alpine3.13

# A work directory is required to be used by npm install
WORKDIR /var/projects/protonmail-themes

# Create a volume to persist changes made to theme files
# The location of the volume is this directory and WORKDIR changes will be reflected to files in this folder
# VOLUME . .

# Copy all project files to the container
# Files in the location of this file are copied to WORKDIR in the container
COPY . .

# Makes sure npm is up to date otherwise install dependencies attempts will fail
RUN npm install -g npm

# Install dependencies
RUN npm install

# The process this container should run
CMD ["npm", "start"]