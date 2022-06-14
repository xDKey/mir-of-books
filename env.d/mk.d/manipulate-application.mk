#!/usr/bin/env make

.PHONY: up stop down restart status

up:
	@docker-compose up -d --remove-orphans
	
stop:
	@docker-compose stop

down:
	@docker-compose down

restart: stop up

status:
	@docker-compose ps
