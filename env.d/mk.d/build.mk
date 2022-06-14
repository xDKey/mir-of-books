#!/usr/bin/env make

.PHONY: build__application build

build__application:
	@echo "Building docker image"
	@docker build \
		--build-arg BUILD_NUMBER=${BITBUCKET_BUILD_NUMBER} \
		--build-arg VERSION_TAG=${VERSION_TAG} \
		-t "${COMPOSE_PROJECT_NAME}_backend:latest" \
		.
	@echo "Docker image built successfully"

build: build__application

