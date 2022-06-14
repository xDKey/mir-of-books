###↓ Builder
FROM node:lts-alpine AS builder

WORKDIR /app

# Copy dependencies
COPY ./package.json ./
COPY ./yarn.lock ./

# Install NPM libraries
RUN yarn install

# Copy sources
COPY ./ .

# Build the image
RUN yarn build

###↓ Executor
FROM node:lts-alpine as executor

# Get the build number for proper image's digest update
ARG BUILD_NUMBER=unknown
ARG VERSION_TAG=unknown-debug
ENV BUILD_NUMBER=${BUILD_NUMBER}
ENV VERSION_TAG=${VERSION_TAG}

RUN apk add --no-cache \
    make

WORKDIR /app

# Copy builder's assets
COPY --from=builder /app ./

# Expose working port(s)
EXPOSE 3000

# Spin up the image
CMD ["yarn", "start:prod"]
