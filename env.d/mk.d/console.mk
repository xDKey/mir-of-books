#!/usr/bin/env make

.PHONY: console__mir_of_books_backend

console__mir_of_books_backend:
	@docker-compose exec mir_of_books_service sh