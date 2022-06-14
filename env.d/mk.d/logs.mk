#!/usr/bin/env make

.PHONY: logs__mir_of_books_backend

logs__mir_of_books_backend:
	@docker-compose logs -f mir_of_books_service
