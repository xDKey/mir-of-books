#!/usr/bin/env make

# Optionally include .env (it couldn't exist in case of fresh installation)
-include .env
export $(shell sed 's/=.*//' .env)

include ./env.d/mk.d/build.mk
include ./env.d/mk.d/manipulate-application.mk
include ./env.d/mk.d/console.mk
include ./env.d/mk.d/logs.mk

.DEFAULT_GOAL := docker_env

docker_env: build
