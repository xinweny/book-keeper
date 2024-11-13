ROOT_PATH := $(abspath $(lastword $(MAKEFILE_LIST)))
ROOT_DIR :=  $(dir $(ROOT_PATH))

BACKEND_DIR = $(ROOT_DIR)/backend
FRONTEND_DIR = $(ROOT_DIR)/frontend

create-dotenv-files:
	cp .env.template .env && \
	cd $(FRONTEND_DIR) && cp .env.template .env \
	cd $(BACKEND_DIR) && cp .env.template .env

init-frontend:
	cd $(FRONTEND_DIR) && npm i

dev-frontend:
	cd $(FRONTEND_DIR) && npm run dev

build-frontend:
	cd $(DASHBOARD_DIR) && npm run build && npm run build

run-frontend:
	cd $(DASHBOARD_DIR) && npm run build && npm run start

init-backend:
	cd $(BACKEND_DIR) && poetry install

dev-backend:
	cd $(BACKEND_DIR) && poetry run python manage.py runserver

prod-backend:
	cd $(BACKEND_DIR) && poetry run gunicorn src.wsgi:application

migrate-db:
	cd $(BACKEND_DIR) && poetry run python manage.py migrate

seed-db:
	cd $(BACKEND_DIR) && poetry run python manage.py seeddata